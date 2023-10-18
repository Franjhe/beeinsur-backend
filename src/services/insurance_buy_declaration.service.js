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
    return await db.Insurance_buy_declaration.findAll();
}

async function getById(id) {
    return await getInsurance_buy_declaration(id);
}

async function create(params) {
    // validate
    if (await db.Insurance_buy_declaration.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Insurance_buy_declaration = new db.Insurance_buy_declaration(params);

    // save Insurance_buy_declaration
    await Insurance_buy_declaration.save();
}

async function update(id, params) {
    const Insurance_buy_declaration = await getInsurance_buy_declaration(id);


    // copy params to Insurance_buy_declaration and save
    Object.assign(Insurance_buy_declaration, params);
    await Insurance_buy_declaration.save();
}

async function _delete(id) {
    const Insurance_buy_declaration = await getInsurance_buy_declaration(id);
    await Insurance_buy_declaration.destroy();
}

// helper functions

async function getInsurance_buy_declaration(id) {
    const Insurance_buy_declaration = await db.Insurance_buy_declaration.findByPk(id);
    if (!Insurance_buy_declaration) throw 'Insurance_buy_declaration not found';
    return Insurance_buy_declaration;
}
