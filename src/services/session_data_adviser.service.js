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
    return await db.Session_data_adviser.findAll();
}

async function getById(id) {
    return await getSession_data_adviser(id);
}

async function create(params) {
    // validate
    if (await db.Session_data_adviser.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Session_data_adviser = new db.Session_data_adviser(params);

    // save Session_data_adviser
    await Session_data_adviser.save();
}

async function update(id, params) {
    const Session_data_adviser = await getSession_data_adviser(id);


    // copy params to Session_data_adviser and save
    Object.assign(Session_data_adviser, params);
    await Session_data_adviser.save();
}

async function _delete(id) {
    const Session_data_adviser = await getSession_data_adviser(id);
    await Session_data_adviser.destroy();
}

// helper functions

async function getSession_data_adviser(id) {
    const Session_data_adviser = await db.Session_data_adviser.findByPk(id);
    if (!Session_data_adviser) throw 'Session_data_adviser not found';
    return Session_data_adviser;
}
