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
    return await db.Declaration_age_groups.findAll();
}

async function getById(id) {
    return await getDeclaration_age_groups(id);
}

async function create(params) {
    // validate
    if (await db.Declaration_age_groups.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Declaration_age_groups = new db.Declaration_age_groups(params);

    // save Declaration_age_groups
    await Declaration_age_groups.save();
}

async function update(id, params) {
    const Declaration_age_groups = await getDeclaration_age_groups(id);


    // copy params to Declaration_age_groups and save
    Object.assign(Declaration_age_groups, params);
    await Declaration_age_groups.save();
}

async function _delete(id) {
    const Declaration_age_groups = await getDeclaration_age_groups(id);
    await Declaration_age_groups.destroy();
}

// helper functions

async function getDeclaration_age_groups(id) {
    const Declaration_age_groups = await db.Declaration_age_groups.findByPk(id);
    if (!Declaration_age_groups) throw 'Declaration_age_groups not found';
    return Declaration_age_groups;
}
