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
    return await db.Insurance_payment.findAll();
}

async function getById(id) {
    return await getInsurance_payment(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_payment.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_payment = new db.Insurance_payment(params);

    // save Insurance_payment
    await Insurance_payment.save();
}

async function update(id, params) {
    const Insurance_payment = await getInsurance_payment(id);


    // copy params to Insurance_payment and save
    Object.assign(Insurance_payment, params);
    await Insurance_payment.save();
}

async function _delete(id) {
    const Insurance_payment = await getInsurance_payment(id);
    await Insurance_payment.destroy();
}

// helper functions

async function getInsurance_payment(id) {
    const Insurance_payment = await db.Insurance_payment.findByPk(id);
    if (!Insurance_payment) throw 'Insurance_payment not found';
    return Insurance_payment;
}
