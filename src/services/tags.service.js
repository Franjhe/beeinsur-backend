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
    return await db.Tags.findAll();
}

async function getById(id) {
    return await getTags(id);
}

async function create(params) {
    // validate
    if (await db.Tags.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Tags = new db.Tags(params);

    // save Tags
    await Tags.save();
}

async function update(id, params) {
    const Tags = await getTags(id);


    // copy params to Tags and save
    Object.assign(Tags, params);
    await Tags.save();
}

async function _delete(id) {
    const Tags = await getTags(id);
    await Tags.destroy();
}

// helper functions

async function getTags(id) {
    const Tags = await db.Tags.findByPk(id);
    if (!Tags) throw 'Tags not found';
    return Tags;
}
