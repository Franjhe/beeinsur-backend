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
    return await db.Declaration_pathology.findAll();
}

async function getById(id) {
    return await getDeclaration_pathology(id);
}

async function create(params) {
    // validate
    if (await db.Declaration_pathology.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Declaration_pathology = new db.Declaration_pathology(params);

    // save Declaration_pathology
    await Declaration_pathology.save();
}

async function update(id, params) {
    const Declaration_pathology = await getDeclaration_pathology(id);


    // copy params to Declaration_pathology and save
    Object.assign(Declaration_pathology, params);
    await Declaration_pathology.save();
}

async function _delete(id) {
    const Declaration_pathology = await getDeclaration_pathology(id);
    await Declaration_pathology.destroy();
}

// helper functions

async function getDeclaration_pathology(id) {
    const Declaration_pathology = await db.Declaration_pathology.findByPk(id);
    if (!Declaration_pathology) throw 'Declaration_pathology not found';
    return Declaration_pathology;
}
