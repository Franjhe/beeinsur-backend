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
    return await db.To_send.findAll();
}

async function getById(id) {
    return await getTo_send(id);
}

async function create(params) {
    // validate
    if (await db.To_send.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const To_send = new db.To_send(params);

    // save To_send
    await To_send.save();
}

async function update(id, params) {
    const To_send = await getTo_send(id);


    // copy params to To_send and save
    Object.assign(To_send, params);
    await To_send.save();
}

async function _delete(id) {
    const To_send = await getTo_send(id);
    await To_send.destroy();
}

// helper functions

async function getTo_send(id) {
    const To_send = await db.To_send.findByPk(id);
    if (!To_send) throw 'To_send not found';
    return To_send;
}
