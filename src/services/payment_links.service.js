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
    return await db.Payment_links.findAll();
}

async function getById(id) {
    return await getPayment_links(id);
}

async function create(params) {
    // validate
    if (await db.Payment_links.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Payment_links = new db.Payment_links(params);

    // save Payment_links
    await Payment_links.save();
}

async function update(id, params) {
    const Payment_links = await getPayment_links(id);


    // copy params to Payment_links and save
    Object.assign(Payment_links, params);
    await Payment_links.save();
}

async function _delete(id) {
    const Payment_links = await getPayment_links(id);
    await Payment_links.destroy();
}

// helper functions

async function getPayment_links(id) {
    const Payment_links = await db.Payment_links.findByPk(id);
    if (!Payment_links) throw 'Payment_links not found';
    return Payment_links;
}
