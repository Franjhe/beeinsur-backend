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
    return await db.Subscribers.findAll();
}

async function getById(id) {
    return await getSubscribers(id);
}

async function create(params) {
    // validate
    if (await db.Subscribers.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Subscribers = new db.Subscribers(params);

    // save Subscribers
    await Subscribers.save();
}

async function update(id, params) {
    const Subscribers = await getSubscribers(id);


    // copy params to Subscribers and save
    Object.assign(Subscribers, params);
    await Subscribers.save();
}

async function _delete(id) {
    const Subscribers = await getSubscribers(id);
    await Subscribers.destroy();
}

// helper functions

async function getSubscribers(id) {
    const Subscribers = await db.Subscribers.findByPk(id);
    if (!Subscribers) throw 'Subscribers not found';
    return Subscribers;
}
