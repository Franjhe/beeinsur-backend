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
    return await db.Exchange_rate.findAll();
}

async function getById(id) {
    return await getExchange_rate(id);
}

async function create(params) {
    // validate
    if (await db.Exchange_rate.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Exchange_rate = new db.Exchange_rate(params);

    // save Exchange_rate
    await Exchange_rate.save();
}

async function update(id, params) {
    const Exchange_rate = await getExchange_rate(id);


    // copy params to Exchange_rate and save
    Object.assign(Exchange_rate, params);
    await Exchange_rate.save();
}

async function _delete(id) {
    const Exchange_rate = await getExchange_rate(id);
    await Exchange_rate.destroy();
}

// helper functions

async function getExchange_rate(id) {
    const Exchange_rate = await db.Exchange_rate.findByPk(id);
    if (!Exchange_rate) throw 'Exchange_rate not found';
    return Exchange_rate;
}
