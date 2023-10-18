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
    return await db.Smoker_taxes.findAll();
}

async function getById(id) {
    return await getSmoker_taxes(id);
}

async function create(params) {
    // validate
    if (await db.Smoker_taxes.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Smoker_taxes = new db.Smoker_taxes(params);

    // save Smoker_taxes
    await Smoker_taxes.save();
}

async function update(id, params) {
    const Smoker_taxes = await getSmoker_taxes(id);


    // copy params to Smoker_taxes and save
    Object.assign(Smoker_taxes, params);
    await Smoker_taxes.save();
}

async function _delete(id) {
    const Smoker_taxes = await getSmoker_taxes(id);
    await Smoker_taxes.destroy();
}

// helper functions

async function getSmoker_taxes(id) {
    const Smoker_taxes = await db.Smoker_taxes.findByPk(id);
    if (!Smoker_taxes) throw 'Smoker_taxes not found';
    return Smoker_taxes;
}
