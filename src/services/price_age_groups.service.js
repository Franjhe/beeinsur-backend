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
    return await db.Price_age_groups.findAll();
}

async function getById(id) {
    return await getPrice_age_groups(id);
}

async function create(params) {
    // validate
    if (await db.Price_age_groups.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Price_age_groups = new db.Price_age_groups(params);

    // save Price_age_groups
    await Price_age_groups.save();
}

async function update(id, params) {
    const Price_age_groups = await getPrice_age_groups(id);


    // copy params to Price_age_groups and save
    Object.assign(Price_age_groups, params);
    await Price_age_groups.save();
}

async function _delete(id) {
    const Price_age_groups = await getPrice_age_groups(id);
    await Price_age_groups.destroy();
}

// helper functions

async function getPrice_age_groups(id) {
    const Price_age_groups = await db.Price_age_groups.findByPk(id);
    if (!Price_age_groups) throw 'Price_age_groups not found';
    return Price_age_groups;
}
