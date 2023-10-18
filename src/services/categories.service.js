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
    return await db.Categories.findAll();
}

async function getById(id) {
    return await getCategories(id);
}

async function create(params) {
    // validate
    if (await db.Categories.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Categories = new db.Categories(params);

    // save Categories
    await Categories.save();
}

async function update(id, params) {
    const Categories = await getCategories(id);


    // copy params to Categories and save
    Object.assign(Categories, params);
    await Categories.save();
}

async function _delete(id) {
    const Categories = await getCategories(id);
    await Categories.destroy();
}

// helper functions

async function getCategories(id) {
    const Categories = await db.Categories.findByPk(id);
    if (!Categories) throw 'Categories not found';
    return Categories;
}
