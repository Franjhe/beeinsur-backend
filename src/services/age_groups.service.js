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
    return await db.Age_groups.findAll();
}

async function getById(id) {
    return await getAge_groups(id);
}

async function create(params) {
    // validate
    if (await db.Age_groups.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Age_groups = new db.Age_groups(params);

    // save Age_groups
    await Age_groups.save();
}

async function update(id, params) {
    const Age_groups = await getAge_groups(id);


    // copy params to Age_groups and save
    Object.assign(Age_groups, params);
    await Age_groups.save();
}

async function _delete(id) {
    const Age_groups = await getAge_groups(id);
    await Age_groups.destroy();
}

// helper functions

async function getAge_groups(id) {
    const Age_groups = await db.Age_groups.findByPk(id);
    if (!Age_groups) throw 'Age_groups not found';
    return Age_groups;
}
