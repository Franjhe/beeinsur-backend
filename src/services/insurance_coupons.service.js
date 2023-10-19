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
    return await db.Insurance_coupons.findAll();
}

async function getById(id) {
    return await getInsurance_coupons(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_coupons.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_coupons = new db.Insurance_coupons(params);

    // save Insurance_coupons
    await Insurance_coupons.save();
}

async function update(id, params) {
    const Insurance_coupons = await getInsurance_coupons(id);


    // copy params to Insurance_coupons and save
    Object.assign(Insurance_coupons, params);
    await Insurance_coupons.save();
}

async function _delete(id) {
    const Insurance_coupons = await getInsurance_coupons(id);
    await Insurance_coupons.destroy();
}

// helper functions

async function getInsurance_coupons(id) {
    const Insurance_coupons = await db.Insurance_coupons.findByPk(id);
    if (!Insurance_coupons) throw 'Insurance_coupons not found';
    return Insurance_coupons;
}
