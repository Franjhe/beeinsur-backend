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
    return await db.Users_permits.findAll();
}

async function getById(id) {
    return await getUsers_permits(id);
}

async function create(params) {
    // validate
    if (await db.Users_permits.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Users_permits = new db.Users_permits(params);

    // save Users_permits
    await Users_permits.save();
}

async function update(id, params) {
    const Users_permits = await getUsers_permits(id);


    // copy params to Users_permits and save
    Object.assign(Users_permits, params);
    await Users_permits.save();
}

async function _delete(id) {
    const Users_permits = await getUsers_permits(id);
    await Users_permits.destroy();
}

// helper functions

async function getUsers_permits(id) {
    const Users_permits = await db.Users_permits.findByPk(id);
    if (!Users_permits) throw 'Users_permits not found';
    return Users_permits;
}
