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
    return await db.Newsletters.findAll();
}

async function getById(id) {
    return await getNewsletters(id);
}

async function create(params) {
    // validate
    if (await db.Newsletters.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Newsletters = new db.Newsletters(params);

    // save Newsletters
    await Newsletters.save();
}

async function update(id, params) {
    const Newsletters = await getNewsletters(id);


    // copy params to Newsletters and save
    Object.assign(Newsletters, params);
    await Newsletters.save();
}

async function _delete(id) {
    const Newsletters = await getNewsletters(id);
    await Newsletters.destroy();
}

// helper functions

async function getNewsletters(id) {
    const Newsletters = await db.Newsletters.findByPk(id);
    if (!Newsletters) throw 'Newsletters not found';
    return Newsletters;
}
