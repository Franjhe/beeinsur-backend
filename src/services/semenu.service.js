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
    return await db.Semenu.findAll();
}

async function getById(id) {
    return await getSemenu(id);
}

async function create(params) {
    // validate
    if (await db.Semenu.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Semenu = new db.Semenu(params);

    // save Semenu
    await Semenu.save();
}

async function update(id, params) {
    const Semenu = await getSemenu(id);


    // copy params to Semenu and save
    Object.assign(Semenu, params);
    await Semenu.save();
}

async function _delete(id) {
    const Semenu = await getSemenu(id);
    await Semenu.destroy();
}

// helper functions

async function getSemenu(id) {
    const Semenu = await db.Semenu.findByPk(id);
    if (!Semenu) throw 'Semenu not found';
    return Semenu;
}
