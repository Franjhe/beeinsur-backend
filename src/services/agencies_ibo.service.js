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
    return await db.Agencies_ibo.findAll();
}

async function getById(id) {
    return await getAgencies_ibo(id);
}

async function create(params) {
    // validate
    if (await db.Agencies_ibo.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Agencies_ibo = new db.Agencies_ibo(params);

    // save Agencies_ibo
    await Agencies_ibo.save();
}

async function update(id, params) {
    const Agencies_ibo = await getAgencies_ibo(id);


    // copy params to Agencies_ibo and save
    Object.assign(Agencies_ibo, params);
    await Agencies_ibo.save();
}

async function _delete(id) {
    const Agencies_ibo = await getAgencies_ibo(id);
    await Agencies_ibo.destroy();
}

// helper functions

async function getAgencies_ibo(id) {
    const Agencies_ibo = await db.Agencies_ibo.findByPk(id);
    if (!Agencies_ibo) throw 'Agencies_ibo not found';
    return Agencies_ibo;
}
