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
    return await db.Contacts.findAll();
}

async function getById(id) {
    return await getContacts(id);
}

async function create(params) {
    // validate
    if (await db.Contacts.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Contacts = new db.Contacts(params);

    // save Contacts
    await Contacts.save();
}

async function update(id, params) {
    const Contacts = await getContacts(id);


    // copy params to Contacts and save
    Object.assign(Contacts, params);
    await Contacts.save();
}

async function _delete(id) {
    const Contacts = await getContacts(id);
    await Contacts.destroy();
}

// helper functions

async function getContacts(id) {
    const Contacts = await db.Contacts.findByPk(id);
    if (!Contacts) throw 'Contacts not found';
    return Contacts;
}
