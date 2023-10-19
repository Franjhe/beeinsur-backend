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
    return await db.Insurances.findAll();
}

async function getById(id) {
    return await getInsurances(id);
}

async function create(params) {
    // validate
    if (await db.Insurances.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurances = new db.Insurances(params);

    // save Insurances
    await Insurances.save();
}

async function update(id, params) {
    const Insurances = await getInsurances(id);


    // copy params to Insurances and save
    Object.assign(Insurances, params);
    await Insurances.save();
}

async function _delete(id) {
    const Insurances = await getInsurances(id);
    await Insurances.destroy();
}

// helper functions

async function getInsurances(id) {
    const Insurances = await db.Insurances.findByPk(id);
    if (!Insurances) throw 'Insurances not found';
    return Insurances;
}
