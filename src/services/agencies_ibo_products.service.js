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
    return await db.Agencies_ibo_products.findAll();
}

async function getById(id) {
    return await getAgencies_ibo_products(id);
}

async function create(params) {
    // validate
    if (await db.Agencies_ibo_products.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Agencies_ibo_products = new db.Agencies_ibo_products(params);

    // save Agencies_ibo_products
    await Agencies_ibo_products.save();
}

async function update(id, params) {
    const Agencies_ibo_products = await getAgencies_ibo_products(id);


    // copy params to Agencies_ibo_products and save
    Object.assign(Agencies_ibo_products, params);
    await Agencies_ibo_products.save();
}

async function _delete(id) {
    const Agencies_ibo_products = await getAgencies_ibo_products(id);
    await Agencies_ibo_products.destroy();
}

// helper functions

async function getAgencies_ibo_products(id) {
    const Agencies_ibo_products = await db.Agencies_ibo_products.findByPk(id);
    if (!Agencies_ibo_products) throw 'Agencies_ibo_products not found';
    return Agencies_ibo_products;
}
