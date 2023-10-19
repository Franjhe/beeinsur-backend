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
    return await db.Insurance_declaration_health.findAll();
}

async function getById(id) {
    return await getInsurance_declaration_health(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_declaration_health.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_declaration_health = new db.Insurance_declaration_health(params);

    // save Insurance_declaration_health
    await Insurance_declaration_health.save();
}

async function update(id, params) {
    const Insurance_declaration_health = await getInsurance_declaration_health(id);


    // copy params to Insurance_declaration_health and save
    Object.assign(Insurance_declaration_health, params);
    await Insurance_declaration_health.save();
}

async function _delete(id) {
    const Insurance_declaration_health = await getInsurance_declaration_health(id);
    await Insurance_declaration_health.destroy();
}

// helper functions

async function getInsurance_declaration_health(id) {
    const Insurance_declaration_health = await db.Insurance_declaration_health.findByPk(id);
    if (!Insurance_declaration_health) throw 'Insurance_declaration_health not found';
    return Insurance_declaration_health;
}
