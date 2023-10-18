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
    return await db.Events.findAll();
}

async function getById(id) {
    return await getEvents(id);
}

async function create(params) {
    // validate
    if (await db.Events.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Events = new db.Events(params);

    // save Events
    await Events.save();
}

async function update(id, params) {
    const Events = await getEvents(id);


    // copy params to Events and save
    Object.assign(Events, params);
    await Events.save();
}

async function _delete(id) {
    const Events = await getEvents(id);
    await Events.destroy();
}

// helper functions

async function getEvents(id) {
    const Events = await db.Events.findByPk(id);
    if (!Events) throw 'Events not found';
    return Events;
}
