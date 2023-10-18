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
    return await db.Agencies.findAll();
}

async function getById(id) {
    return await getAgencies(id);
}

async function create(params) {
    // validate
    if (await db.Agencies.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Agencies = new db.Agencies(params);

    // save Agencies
    await Agencies.save();
}

async function update(id, params) {
    const Agencies = await getAgencies(id);


    // copy params to Agencies and save
    Object.assign(Agencies, params);
    await Agencies.save();
}

async function _delete(id) {
    const Agencies = await getAgencies(id);
    await Agencies.destroy();
}

// helper functions

async function getAgencies(id) {
    const Agencies = await db.Agencies.findByPk(id);
    if (!Agencies) throw 'Agencies not found';
    return Agencies;
}
