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
    return await db.Session_data.findAll();
}

async function getById(id) {
    return await getSession_data(id);
}

async function create(params) {
    // validate
    if (await db.Session_data.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Session_data = new db.Session_data(params);

    // save Session_data
    await Session_data.save();
}

async function update(id, params) {
    const Session_data = await getSession_data(id);


    // copy params to Session_data and save
    Object.assign(Session_data, params);
    await Session_data.save();
}

async function _delete(id) {
    const Session_data = await getSession_data(id);
    await Session_data.destroy();
}

// helper functions

async function getSession_data(id) {
    const Session_data = await db.Session_data.findByPk(id);
    if (!Session_data) throw 'Session_data not found';
    return Session_data;
}
