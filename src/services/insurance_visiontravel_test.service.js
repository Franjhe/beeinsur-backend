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
    return await db.Insurance_visiontravel_test.findAll();
}

async function getById(id) {
    return await getInsurance_visiontravel_test(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_visiontravel_test.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_visiontravel_test = new db.Insurance_visiontravel_test(params);

    // save Insurance_visiontravel_test
    await Insurance_visiontravel_test.save();
}

async function update(id, params) {
    const Insurance_visiontravel_test = await getInsurance_visiontravel_test(id);


    // copy params to Insurance_visiontravel_test and save
    Object.assign(Insurance_visiontravel_test, params);
    await Insurance_visiontravel_test.save();
}

async function _delete(id) {
    const Insurance_visiontravel_test = await getInsurance_visiontravel_test(id);
    await Insurance_visiontravel_test.destroy();
}

// helper functions

async function getInsurance_visiontravel_test(id) {
    const Insurance_visiontravel_test = await db.Insurance_visiontravel_test.findByPk(id);
    if (!Insurance_visiontravel_test) throw 'Insurance_visiontravel_test not found';
    return Insurance_visiontravel_test;
}
