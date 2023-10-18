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
    return await db.Insurance_terms.findAll();
}

async function getById(id) {
    return await getInsurance_terms(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_terms.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_terms = new db.Insurance_terms(params);

    // save Insurance_terms
    await Insurance_terms.save();
}

async function update(id, params) {
    const Insurance_terms = await getInsurance_terms(id);


    // copy params to Insurance_terms and save
    Object.assign(Insurance_terms, params);
    await Insurance_terms.save();
}

async function _delete(id) {
    const Insurance_terms = await getInsurance_terms(id);
    await Insurance_terms.destroy();
}

// helper functions

async function getInsurance_terms(id) {
    const Insurance_terms = await db.Insurance_terms.findByPk(id);
    if (!Insurance_terms) throw 'Insurance_terms not found';
    return Insurance_terms;
}
