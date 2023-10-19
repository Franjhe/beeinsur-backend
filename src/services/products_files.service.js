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
    return await db.Products_files.findAll();
}

async function getById(id) {
    return await getProducts_files(id);
}

async function create(params) {
    // validate
    if (await db.Products_files.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Products_files = new db.Products_files(params);

    // save Products_files
    await Products_files.save();
}

async function update(id, params) {
    const Products_files = await getProducts_files(id);


    // copy params to Products_files and save
    Object.assign(Products_files, params);
    await Products_files.save();
}

async function _delete(id) {
    const Products_files = await getProducts_files(id);
    await Products_files.destroy();
}

// helper functions

async function getProducts_files(id) {
    const Products_files = await db.Products_files.findByPk(id);
    if (!Products_files) throw 'Products_files not found';
    return Products_files;
}
