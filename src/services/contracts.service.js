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
    return await db.Contracts.findAll();
}

async function getById(id) {
    return await getContracts(id);
}

async function create(params) {
    // validate
    if (await db.Contracts.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Contracts = new db.Contracts(params);

    // save Contracts
    await Contracts.save();
}

async function update(id, params) {
    const Contracts = await getContracts(id);


    // copy params to Contracts and save
    Object.assign(Contracts, params);
    await Contracts.save();
}

async function _delete(id) {
    const Contracts = await getContracts(id);
    await Contracts.destroy();
}

// helper functions

async function getContracts(id) {
    const Contracts = await db.Contracts.findByPk(id);
    if (!Contracts) throw 'Contracts not found';
    return Contracts;
}
