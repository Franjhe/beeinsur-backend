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
    return await db.Messaje.findAll();
}

async function getById(id) {
    return await getMessaje(id);
}

async function create(params) {
    // validate
    if (await db.Messaje.findOne({ where: { title: params.title } })) {
        throw 'Title "' + params.title + '" is already registered';
    }

    const messaje = new db.Messaje(params);

    // save messaje
    await messaje.save();
}

async function update(id, params) {
    const messaje = await getMessaje(id);

    // validate
    const contentChanged = params.content && messaje.content !== params.content;
    if (contentChanged && await db.Messaje.findOne({ where: { content: params.content } })) {
        throw 'Content "' + params.content + '" is already registered';
    }


    // copy params to messaje and save
    Object.assign(messaje, params);
    await messaje.save();
}

async function _delete(id) {
    const messaje = await getMessaje(id);
    await messaje.destroy();
}

// helper functions

async function getMessaje(id) {
    const messaje = await db.Messaje.findByPk(id);
    if (!messaje) throw 'messaje not found';
    return messaje;
}
