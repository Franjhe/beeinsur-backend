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
    return await db.Insurance_payment_temp.findAll();
}

async function getById(id) {
    return await getInsurance_payment_temp(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_payment_temp.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_payment_temp = new db.Insurance_payment_temp(params);

    // save Insurance_payment_temp
    await Insurance_payment_temp.save();
}

async function update(id, params) {
    const Insurance_payment_temp = await getInsurance_payment_temp(id);


    // copy params to Insurance_payment_temp and save
    Object.assign(Insurance_payment_temp, params);
    await Insurance_payment_temp.save();
}

async function _delete(id) {
    const Insurance_payment_temp = await getInsurance_payment_temp(id);
    await Insurance_payment_temp.destroy();
}

// helper functions

async function getInsurance_payment_temp(id) {
    const Insurance_payment_temp = await db.Insurance_payment_temp.findByPk(id);
    if (!Insurance_payment_temp) throw 'Insurance_payment_temp not found';
    return Insurance_payment_temp;
}
