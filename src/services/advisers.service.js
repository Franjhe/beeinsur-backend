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
    return await db.Advisers.findAll();
}

async function getById(id) {
    return await getAdvisers(id);
}

async function create(params) {
    // validate
    if (await db.Advisers.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Advisers = new db.Advisers(params);

    // save Advisers
    await Advisers.save();
}

async function update(id, params) {
    const Advisers = await getAdvisers(id);


    // copy params to Advisers and save
    Object.assign(Advisers, params);
    await Advisers.save();
}

async function _delete(id) {
    const Advisers = await getAdvisers(id);
    await Advisers.destroy();
}

// helper functions

async function getAdvisers(id) {
    const Advisers = await db.Advisers.findByPk(id);
    if (!Advisers) throw 'Advisers not found';
    return Advisers;
}
