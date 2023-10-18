const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Agencies_commissions.findAll();
}

async function getById(id) {
    return await getAgencies_commissions(id);
}

async function create(params) {
    // validate
    if (await db.Agencies_commissions.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Agencies_commissions = new db.Agencies_commissions(params);

    // save Agencies_commissions
    await Agencies_commissions.save();
}

async function update(id, params) {
    const Agencies_commissions = await getAgencies_commissions(id);


    // copy params to Agencies_commissions and save
    Object.assign(Agencies_commissions, params);
    await Agencies_commissions.save();
}

async function _delete(id) {
    const Agencies_commissions = await getAgencies_commissions(id);
    await Agencies_commissions.destroy();
}

// helper functions

async function getAgencies_commissions(id) {
    const Agencies_commissions = await db.Agencies_commissions.findByPk(id);
    if (!Agencies_commissions) throw 'Agencies_commissions not found';
    return Agencies_commissions;
}
