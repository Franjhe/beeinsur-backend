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
    return await db.Quoters.findAll();
}

async function getById(id) {
    return await getQuoters(id);
}

async function create(params) {
    // validate
    if (await db.Quoters.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Quoters = new db.Quoters(params);

    // save Quoters
    await Quoters.save();
}

async function update(id, params) {
    const Quoters = await getQuoters(id);


    // copy params to Quoters and save
    Object.assign(Quoters, params);
    await Quoters.save();
}

async function _delete(id) {
    const Quoters = await getQuoters(id);
    await Quoters.destroy();
}

// helper functions

async function getQuoters(id) {
    const Quoters = await db.Quoters.findByPk(id);
    if (!Quoters) throw 'Quoters not found';
    return Quoters;
}
