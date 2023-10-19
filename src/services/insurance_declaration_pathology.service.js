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
    return await db.Insurance_declaration_pathology.findAll();
}

async function getById(id) {
    return await getInsurance_declaration_pathology(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_declaration_pathology.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_declaration_pathology = new db.Insurance_declaration_pathology(params);

    // save Insurance_declaration_pathology
    await Insurance_declaration_pathology.save();
}

async function update(id, params) {
    const Insurance_declaration_pathology = await getInsurance_declaration_pathology(id);


    // copy params to Insurance_declaration_pathology and save
    Object.assign(Insurance_declaration_pathology, params);
    await Insurance_declaration_pathology.save();
}

async function _delete(id) {
    const Insurance_declaration_pathology = await getInsurance_declaration_pathology(id);
    await Insurance_declaration_pathology.destroy();
}

// helper functions

async function getInsurance_declaration_pathology(id) {
    const Insurance_declaration_pathology = await db.Insurance_declaration_pathology.findByPk(id);
    if (!Insurance_declaration_pathology) throw 'Insurance_declaration_pathology not found';
    return Insurance_declaration_pathology;
}
