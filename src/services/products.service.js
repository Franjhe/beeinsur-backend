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
    return await db.Products.findAll();
}

async function getById(id) {
    return await getProducts(id);
}

async function create(params) {
    // validate
    if (await db.Products.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Products = new db.Products(params);

    // save Products
    await Products.save();
}

async function update(id, params) {
    const Products = await getProducts(id);


    // copy params to Products and save
    Object.assign(Products, params);
    await Products.save();
}

async function _delete(id) {
    const Products = await getProducts(id);
    await Products.destroy();
}

// helper functions

async function getProducts(id) {
    const Products = await db.Products.findByPk(id);
    if (!Products) throw 'Products not found';
    return Products;
}
