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
    return await db.Subscribers_beneficiaries.findAll();
}

async function getById(id) {
    return await getSubscribers_beneficiaries(id);
}

async function create(params) {
    // validate
    if (await db.Subscribers_beneficiaries.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Subscribers_beneficiaries = new db.Subscribers_beneficiaries(params);

    // save Subscribers_beneficiaries
    await Subscribers_beneficiaries.save();
}

async function update(id, params) {
    const Subscribers_beneficiaries = await getSubscribers_beneficiaries(id);


    // copy params to Subscribers_beneficiaries and save
    Object.assign(Subscribers_beneficiaries, params);
    await Subscribers_beneficiaries.save();
}

async function _delete(id) {
    const Subscribers_beneficiaries = await getSubscribers_beneficiaries(id);
    await Subscribers_beneficiaries.destroy();
}

// helper functions

async function getSubscribers_beneficiaries(id) {
    const Subscribers_beneficiaries = await db.Subscribers_beneficiaries.findByPk(id);
    if (!Subscribers_beneficiaries) throw 'Subscribers_beneficiaries not found';
    return Subscribers_beneficiaries;
}
