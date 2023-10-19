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
    return await db.Lists.findAll();
}

async function getById(id) {
    return await getLists(id);
}

async function create(params) {
    // validate
    if (await db.Lists.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Lists = new db.Lists(params);

    // save Lists
    await Lists.save();
}

async function update(id, params) {
    const Lists = await getLists(id);


    // copy params to Lists and save
    Object.assign(Lists, params);
    await Lists.save();
}

async function _delete(id) {
    const Lists = await getLists(id);
    await Lists.destroy();
}

// helper functions

async function getLists(id) {
    const Lists = await db.Lists.findByPk(id);
    if (!Lists) throw 'Lists not found';
    return Lists;
}
