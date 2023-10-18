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
    return await db.Fee_percentages.findAll();
}

async function getById(id) {
    return await getFee_percentages(id);
}

async function create(params) {
    // validate
    if (await db.Fee_percentages.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Fee_percentages = new db.Fee_percentages(params);

    // save Fee_percentages
    await Fee_percentages.save();
}

async function update(id, params) {
    const Fee_percentages = await getFee_percentages(id);


    // copy params to Fee_percentages and save
    Object.assign(Fee_percentages, params);
    await Fee_percentages.save();
}

async function _delete(id) {
    const Fee_percentages = await getFee_percentages(id);
    await Fee_percentages.destroy();
}

// helper functions

async function getFee_percentages(id) {
    const Fee_percentages = await db.Fee_percentages.findByPk(id);
    if (!Fee_percentages) throw 'Fee_percentages not found';
    return Fee_percentages;
}
