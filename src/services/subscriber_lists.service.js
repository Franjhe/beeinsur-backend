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
    return await db.Subscriber_lists.findAll();
}

async function getById(id) {
    return await getSubscriber_lists(id);
}

async function create(params) {
    // validate
    if (await db.Subscriber_lists.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Subscriber_lists = new db.Subscriber_lists(params);

    // save Subscriber_lists
    await Subscriber_lists.save();
}

async function update(id, params) {
    const Subscriber_lists = await getSubscriber_lists(id);


    // copy params to Subscriber_lists and save
    Object.assign(Subscriber_lists, params);
    await Subscriber_lists.save();
}

async function _delete(id) {
    const Subscriber_lists = await getSubscriber_lists(id);
    await Subscriber_lists.destroy();
}

// helper functions

async function getSubscriber_lists(id) {
    const Subscriber_lists = await db.Subscriber_lists.findByPk(id);
    if (!Subscriber_lists) throw 'Subscriber_lists not found';
    return Subscriber_lists;
}
