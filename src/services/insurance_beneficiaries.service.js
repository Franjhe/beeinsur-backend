const bcrypt = require('bcryptjs');
const db = require('./../_helpers/db');


module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Insurance_beneficiaries.findAll();
}

async function getById(id) {
    return await getInsurance_beneficiaries(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_beneficiaries.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_beneficiaries = new db.Insurance_beneficiaries(params);

    // save Insurance_beneficiaries
    await Insurance_beneficiaries.save();
}

async function update(id, params) {
    const Insurance_beneficiaries = await getInsurance_beneficiaries(id);


    // copy params to Insurance_beneficiaries and save
    Object.assign(Insurance_beneficiaries, params);
    await Insurance_beneficiaries.save();
}

async function _delete(id) {
    const Insurance_beneficiaries = await getInsurance_beneficiaries(id);
    await Insurance_beneficiaries.destroy();
}

// helper functions

async function getInsurance_beneficiaries(id) {
    const Insurance_beneficiaries = await db.Insurance_beneficiaries.findByPk(id);
    if (!Insurance_beneficiaries) throw 'Insurance_beneficiaries not found';
    return Insurance_beneficiaries;
}
