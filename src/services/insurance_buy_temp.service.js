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
    return await db.Insurance_buy_temp.findAll();
}

async function getById(id) {
    return await getInsurance_buy_temp(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_buy_temp.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_buy_temp = new db.Insurance_buy_temp(params);

    // save Insurance_buy_temp
    await Insurance_buy_temp.save();
}

async function update(id, params) {
    const Insurance_buy_temp = await getInsurance_buy_temp(id);


    // copy params to Insurance_buy_temp and save
    Object.assign(Insurance_buy_temp, params);
    await Insurance_buy_temp.save();
}

async function _delete(id) {
    const Insurance_buy_temp = await getInsurance_buy_temp(id);
    await Insurance_buy_temp.destroy();
}

// helper functions

async function getInsurance_buy_temp(id) {
    const Insurance_buy_temp = await db.Insurance_buy_temp.findByPk(id);
    if (!Insurance_buy_temp) throw 'Insurance_buy_temp not found';
    return Insurance_buy_temp;
}
