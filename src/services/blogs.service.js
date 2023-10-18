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
    return await db.Blogs.findAll();
}

async function getById(id) {
    return await getBlogs(id);
}

async function create(params) {
    // validate
    if (await db.Blogs.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Blogs = new db.Blogs(params);

    // save Blogs
    await Blogs.save();
}

async function update(id, params) {
    const Blogs = await getBlogs(id);


    // copy params to Blogs and save
    Object.assign(Blogs, params);
    await Blogs.save();
}

async function _delete(id) {
    const Blogs = await getBlogs(id);
    await Blogs.destroy();
}

// helper functions

async function getBlogs(id) {
    const Blogs = await db.Blogs.findByPk(id);
    if (!Blogs) throw 'Blogs not found';
    return Blogs;
}
