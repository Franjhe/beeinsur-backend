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

    const messaje = new db.Messaje(params);

    // save messaje
    await messaje.save();
}

async function update(id, params) {
    const messaje = await getMessaje(id);

    // validate
    const contentChanged = params.id && messaje.id !== params.id;
    if (contentChanged && await db.Messaje.findOne({ where: { id: params.id } })) {
        throw 'Id "' + params.id + '" is already registered';
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
