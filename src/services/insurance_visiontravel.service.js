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
    return await db.Insurance_visiontravel.findAll();
}

async function getById(id) {
    return await getInsurance_visiontravel(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_visiontravel.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_visiontravel = new db.Insurance_visiontravel(params);

    // save Insurance_visiontravel
    await Insurance_visiontravel.save();
}

async function update(id, params) {
    const Insurance_visiontravel = await getInsurance_visiontravel(id);


    // copy params to Insurance_visiontravel and save
    Object.assign(Insurance_visiontravel, params);
    await Insurance_visiontravel.save();
}

async function _delete(id) {
    const Insurance_visiontravel = await getInsurance_visiontravel(id);
    await Insurance_visiontravel.destroy();
}

// helper functions

async function getInsurance_visiontravel(id) {
    const Insurance_visiontravel = await db.Insurance_visiontravel.findByPk(id);
    if (!Insurance_visiontravel) throw 'Insurance_visiontravel not found';
    return Insurance_visiontravel;
}
