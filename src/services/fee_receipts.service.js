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
    return await db.Fee_receipts.findAll();
}

async function getById(id) {
    return await getFee_receipts(id);
}

async function create(params) {
    // validate
    if (await db.Fee_receipts.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Fee_receipts = new db.Fee_receipts(params);

    // save Fee_receipts
    await Fee_receipts.save();
}

async function update(id, params) {
    const Fee_receipts = await getFee_receipts(id);


    // copy params to Fee_receipts and save
    Object.assign(Fee_receipts, params);
    await Fee_receipts.save();
}

async function _delete(id) {
    const Fee_receipts = await getFee_receipts(id);
    await Fee_receipts.destroy();
}

// helper functions

async function getFee_receipts(id) {
    const Fee_receipts = await db.Fee_receipts.findByPk(id);
    if (!Fee_receipts) throw 'Fee_receipts not found';
    return Fee_receipts;
}
