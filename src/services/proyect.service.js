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
    return await db.Proyect.findAll();
}

async function getById(id) {
    return await getProyect(id);
}

async function create(params) {
    // validate
    if (await db.Proyect.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const proyect = new db.Proyect(params);

    // save proyect
    await proyect.save();
}

async function update(id, params) {
    const proyect = await getProyect(id);


    // copy params to proyect and save
    Object.assign(proyect, params);
    await proyect.save();
}

async function _delete(id) {
    const proyect = await getProyect(id);
    await proyect.destroy();
}

// helper functions

async function getProyect(id) {
    const proyect = await db.Proyect.findByPk(id);
    if (!proyect) throw 'Proyect not found';
    return proyect;
}
