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
    return await db.Subscribers_test.findAll();
}

async function getById(id) {
    return await getSubscribers_test(id);
}

async function create(params) {
    // validate
    if (await db.Subscribers_test.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Subscribers_test = new db.Subscribers_test(params);

    // save Subscribers_test
    await Subscribers_test.save();
}

async function update(id, params) {
    const Subscribers_test = await getSubscribers_test(id);


    // copy params to Subscribers_test and save
    Object.assign(Subscribers_test, params);
    await Subscribers_test.save();
}

async function _delete(id) {
    const Subscribers_test = await getSubscribers_test(id);
    await Subscribers_test.destroy();
}

// helper functions

async function getSubscribers_test(id) {
    const Subscribers_test = await db.Subscribers_test.findByPk(id);
    if (!Subscribers_test) throw 'Subscribers_test not found';
    return Subscribers_test;
}
