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
    return await db.Recover_password.findAll();
}

async function getById(id) {
    return await getRecover_password(id);
}

async function create(params) {
    // validate
    if (await db.Recover_password.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Recover_password = new db.Recover_password(params);

    // save Recover_password
    await Recover_password.save();
}

async function update(id, params) {
    const Recover_password = await getRecover_password(id);


    // copy params to Recover_password and save
    Object.assign(Recover_password, params);
    await Recover_password.save();
}

async function _delete(id) {
    const Recover_password = await getRecover_password(id);
    await Recover_password.destroy();
}

// helper functions

async function getRecover_password(id) {
    const Recover_password = await db.Recover_password.findByPk(id);
    if (!Recover_password) throw 'Recover_password not found';
    return Recover_password;
}
