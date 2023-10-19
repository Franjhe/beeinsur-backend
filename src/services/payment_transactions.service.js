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
    return await db.Payment_transactions.findAll();
}

async function getById(id) {
    return await getPayment_transactions(id);
}

async function create(params) {
    // validate
    if (await db.Payment_transactions.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Payment_transactions = new db.Payment_transactions(params);

    // save Payment_transactions
    await Payment_transactions.save();
}

async function update(id, params) {
    const Payment_transactions = await getPayment_transactions(id);


    // copy params to Payment_transactions and save
    Object.assign(Payment_transactions, params);
    await Payment_transactions.save();
}

async function _delete(id) {
    const Payment_transactions = await getPayment_transactions(id);
    await Payment_transactions.destroy();
}

// helper functions

async function getPayment_transactions(id) {
    const Payment_transactions = await db.Payment_transactions.findByPk(id);
    if (!Payment_transactions) throw 'Payment_transactions not found';
    return Payment_transactions;
}
