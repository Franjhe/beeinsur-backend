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
    return await db.Authorization_api.findAll();
}

async function getById(id) {
    return await getAuthorization_api(id);
}

async function create(params) {
    // validate
    if (await db.Authorization_api.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Authorization_api = new db.Authorization_api(params);

    // save Authorization_api
    await Authorization_api.save();
}

async function update(id, params) {
    const Authorization_api = await getAuthorization_api(id);


    // copy params to Authorization_api and save
    Object.assign(Authorization_api, params);
    await Authorization_api.save();
}

async function _delete(id) {
    const Authorization_api = await getAuthorization_api(id);
    await Authorization_api.destroy();
}

// helper functions

async function getAuthorization_api(id) {
    const Authorization_api = await db.Authorization_api.findByPk(id);
    if (!Authorization_api) throw 'Authorization_api not found';
    return Authorization_api;
}
