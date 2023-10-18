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
    return await db.Users.findAll();
}

async function getById(id) {
    return await getUsers(id);
}

async function create(params) {
    // validate
    if (await db.Users.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Users = new db.Users(params);

    // save Users
    await Users.save();
}

async function update(id, params) {
    const Users = await getUsers(id);


    // copy params to Users and save
    Object.assign(Users, params);
    await Users.save();
}

async function _delete(id) {
    const Users = await getUsers(id);
    await Users.destroy();
}

// helper functions

async function getUsers(id) {
    const Users = await db.Users.findByPk(id);
    if (!Users) throw 'Users not found';
    return Users;
}
