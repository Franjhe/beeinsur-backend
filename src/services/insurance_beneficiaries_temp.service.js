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
    return await db.Insurance_beneficiaries_temp.findAll();
}

async function getById(id) {
    return await getInsurance_beneficiaries_temp(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_beneficiaries_temp.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_beneficiaries_temp = new db.Insurance_beneficiaries_temp(params);

    // save Insurance_beneficiaries_temp
    await Insurance_beneficiaries_temp.save();
}

async function update(id, params) {
    const Insurance_beneficiaries_temp = await getInsurance_beneficiaries_temp(id);


    // copy params to Insurance_beneficiaries_temp and save
    Object.assign(Insurance_beneficiaries_temp, params);
    await Insurance_beneficiaries_temp.save();
}

async function _delete(id) {
    const Insurance_beneficiaries_temp = await getInsurance_beneficiaries_temp(id);
    await Insurance_beneficiaries_temp.destroy();
}

// helper functions

async function getInsurance_beneficiaries_temp(id) {
    const Insurance_beneficiaries_temp = await db.Insurance_beneficiaries_temp.findByPk(id);
    if (!Insurance_beneficiaries_temp) throw 'Insurance_beneficiaries_temp not found';
    return Insurance_beneficiaries_temp;
}
