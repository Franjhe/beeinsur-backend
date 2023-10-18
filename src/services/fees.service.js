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
    return await db.Fees.findAll();
}

async function getById(id) {
    return await getFees(id);
}

async function create(params) {
    // validate
    if (await db.Fees.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Fees = new db.Fees(params);

    // save Fees
    await Fees.save();
}

async function update(id, params) {
    const Fees = await getFees(id);


    // copy params to Fees and save
    Object.assign(Fees, params);
    await Fees.save();
}

async function _delete(id) {
    const Fees = await getFees(id);
    await Fees.destroy();
}

// helper functions

async function getFees(id) {
    const Fees = await db.Fees.findByPk(id);
    if (!Fees) throw 'Fees not found';
    return Fees;
}
