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
    return await db.Countries.findAll();
}

async function getById(id) {
    return await getCountries(id);
}

async function create(params) {
    // validate
    if (await db.Countries.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Countries = new db.Countries(params);

    // save Countries
    await Countries.save();
}

async function update(id, params) {
    const Countries = await getCountries(id);


    // copy params to Countries and save
    Object.assign(Countries, params);
    await Countries.save();
}

async function _delete(id) {
    const Countries = await getCountries(id);
    await Countries.destroy();
}

// helper functions

async function getCountries(id) {
    const Countries = await db.Countries.findByPk(id);
    if (!Countries) throw 'Countries not found';
    return Countries;
}
