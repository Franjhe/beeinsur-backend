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
    return await db.Insurance_prices.findAll();
}

async function getById(id) {
    return await getInsurance_prices(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_prices.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_prices = new db.Insurance_prices(params);

    // save Insurance_prices
    await Insurance_prices.save();
}

async function update(id, params) {
    const Insurance_prices = await getInsurance_prices(id);


    // copy params to Insurance_prices and save
    Object.assign(Insurance_prices, params);
    await Insurance_prices.save();
}

async function _delete(id) {
    const Insurance_prices = await getInsurance_prices(id);
    await Insurance_prices.destroy();
}

// helper functions

async function getInsurance_prices(id) {
    const Insurance_prices = await db.Insurance_prices.findByPk(id);
    if (!Insurance_prices) throw 'Insurance_prices not found';
    return Insurance_prices;
}
