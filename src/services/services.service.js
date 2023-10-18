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
    return await db.Services.findAll();
}

async function getById(id) {
    return await getServices(id);
}

async function create(params) {
    // validate
    if (await db.Services.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Services = new db.Services(params);

    // save Services
    await Services.save();
}

async function update(id, params) {
    const Services = await getServices(id);


    // copy params to Services and save
    Object.assign(Services, params);
    await Services.save();
}

async function _delete(id) {
    const Services = await getServices(id);
    await Services.destroy();
}

// helper functions

async function getServices(id) {
    const Services = await db.Services.findByPk(id);
    if (!Services) throw 'Services not found';
    return Services;
}
