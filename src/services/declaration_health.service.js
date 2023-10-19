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
    return await db.Declaration_health.findAll();
}

async function getById(id) {
    return await getDeclaration_health(id);
}

async function create(params) {
    // validate
    if (await db.Declaration_health.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Declaration_health = new db.Declaration_health(params);

    // save Declaration_health
    await Declaration_health.save();
}

async function update(id, params) {
    const Declaration_health = await getDeclaration_health(id);


    // copy params to Declaration_health and save
    Object.assign(Declaration_health, params);
    await Declaration_health.save();
}

async function _delete(id) {
    const Declaration_health = await getDeclaration_health(id);
    await Declaration_health.destroy();
}

// helper functions

async function getDeclaration_health(id) {
    const Declaration_health = await db.Declaration_health.findByPk(id);
    if (!Declaration_health) throw 'Declaration_health not found';
    return Declaration_health;
}
