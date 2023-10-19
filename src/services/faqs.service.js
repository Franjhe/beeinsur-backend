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
    return await db.Faqs.findAll();
}

async function getById(id) {
    return await getFaqs(id);
}

async function create(params) {
    // validate
    if (await db.Faqs.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Faqs = new db.Faqs(params);

    // save Faqs
    await Faqs.save();
}

async function update(id, params) {
    const Faqs = await getFaqs(id);


    // copy params to Faqs and save
    Object.assign(Faqs, params);
    await Faqs.save();
}

async function _delete(id) {
    const Faqs = await getFaqs(id);
    await Faqs.destroy();
}

// helper functions

async function getFaqs(id) {
    const Faqs = await db.Faqs.findByPk(id);
    if (!Faqs) throw 'Faqs not found';
    return Faqs;
}
