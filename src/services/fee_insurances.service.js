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
    return await db.Fee_insurances.findAll();
}

async function getById(id) {
    return await getFee_insurances(id);
}

async function create(params) {
    // validate
    if (await db.Fee_insurances.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Fee_insurances = new db.Fee_insurances(params);

    // save Fee_insurances
    await Fee_insurances.save();
}

async function update(id, params) {
    const Fee_insurances = await getFee_insurances(id);


    // copy params to Fee_insurances and save
    Object.assign(Fee_insurances, params);
    await Fee_insurances.save();
}

async function _delete(id) {
    const Fee_insurances = await getFee_insurances(id);
    await Fee_insurances.destroy();
}

// helper functions

async function getFee_insurances(id) {
    const Fee_insurances = await db.Fee_insurances.findByPk(id);
    if (!Fee_insurances) throw 'Fee_insurances not found';
    return Fee_insurances;
}
