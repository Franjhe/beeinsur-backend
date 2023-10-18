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
    return await db.Advisers_commissions.findAll();
}

async function getById(id) {
    return await getAdvisers_commissions(id);
}

async function create(params) {
    // validate
    if (await db.Advisers_commissions.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Advisers_commissions = new db.Advisers_commissions(params);

    // save Advisers_commissions
    await Advisers_commissions.save();
}

async function update(id, params) {
    const Advisers_commissions = await getAdvisers_commissions(id);


    // copy params to Advisers_commissions and save
    Object.assign(Advisers_commissions, params);
    await Advisers_commissions.save();
}

async function _delete(id) {
    const Advisers_commissions = await getAdvisers_commissions(id);
    await Advisers_commissions.destroy();
}

// helper functions

async function getAdvisers_commissions(id) {
    const Advisers_commissions = await db.Advisers_commissions.findByPk(id);
    if (!Advisers_commissions) throw 'Advisers_commissions not found';
    return Advisers_commissions;
}
