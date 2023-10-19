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
    return await db.Blog_tags.findAll();
}

async function getById(id) {
    return await getBlog_tags(id);
}

async function create(params) {
    // validate
    if (await db.Blog_tags.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Blog_tags = new db.Blog_tags(params);

    // save Blog_tags
    await Blog_tags.save();
}

async function update(id, params) {
    const Blog_tags = await getBlog_tags(id);


    // copy params to Blog_tags and save
    Object.assign(Blog_tags, params);
    await Blog_tags.save();
}

async function _delete(id) {
    const Blog_tags = await getBlog_tags(id);
    await Blog_tags.destroy();
}

// helper functions

async function getBlog_tags(id) {
    const Blog_tags = await db.Blog_tags.findByPk(id);
    if (!Blog_tags) throw 'Blog_tags not found';
    return Blog_tags;
}
