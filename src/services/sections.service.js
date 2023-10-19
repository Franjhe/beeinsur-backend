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
    return await db.Sections.findAll();
}

async function getById(id) {
    return await getSections(id);
}

async function create(params) {
    // validate
    if (await db.Sections.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Sections = new db.Sections(params);

    // save Sections
    await Sections.save();
}

async function update(id, params) {
    const Sections = await getSections(id);


    // copy params to Sections and save
    Object.assign(Sections, params);
    await Sections.save();
}

async function _delete(id) {
    const Sections = await getSections(id);
    await Sections.destroy();
}

// helper functions

async function getSections(id) {
    const Sections = await db.Sections.findByPk(id);
    if (!Sections) throw 'Sections not found';
    return Sections;
}
