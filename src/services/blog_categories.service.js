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
    return await db.Blog_categories.findAll();
}

async function getById(id) {
    return await getBlog_categories(id);
}

async function create(params) {
    // validate
    if (await db.Blog_categories.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Blog_categories = new db.Blog_categories(params);

    // save Blog_categories
    await Blog_categories.save();
}

async function update(id, params) {
    const Blog_categories = await getBlog_categories(id);


    // copy params to Blog_categories and save
    Object.assign(Blog_categories, params);
    await Blog_categories.save();
}

async function _delete(id) {
    const Blog_categories = await getBlog_categories(id);
    await Blog_categories.destroy();
}

// helper functions

async function getBlog_categories(id) {
    const Blog_categories = await db.Blog_categories.findByPk(id);
    if (!Blog_categories) throw 'Blog_categories not found';
    return Blog_categories;
}
