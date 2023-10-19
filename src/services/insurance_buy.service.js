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
    return await db.Insurance_buy.findAll();
}

async function getById(id) {
    return await getInsurance_buy(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_buy.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_buy = new db.Insurance_buy(params);

    // save Insurance_buy
    await Insurance_buy.save();
}

async function update(id, params) {
    const Insurance_buy = await getInsurance_buy(id);


    // copy params to Insurance_buy and save
    Object.assign(Insurance_buy, params);
    await Insurance_buy.save();
}

async function _delete(id) {
    const Insurance_buy = await getInsurance_buy(id);
    await Insurance_buy.destroy();
}

// helper functions

async function getInsurance_buy(id) {
    const Insurance_buy = await db.Insurance_buy.findByPk(id);
    if (!Insurance_buy) throw 'Insurance_buy not found';
    return Insurance_buy;
}
