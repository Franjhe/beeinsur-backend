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
    return await db.Files.findAll();
}

async function getById(id) {
    return await getFiles(id);
}

async function create(params) {
    // validate
    if (await db.Files.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Files = new db.Files(params);

    // save Files
    await Files.save();
}

async function update(id, params) {
    const Files = await getFiles(id);


    // copy params to Files and save
    Object.assign(Files, params);
    await Files.save();
}

async function _delete(id) {
    const Files = await getFiles(id);
    await Files.destroy();
}

// helper functions

async function getFiles(id) {
    const Files = await db.Files.findByPk(id);
    if (!Files) throw 'Files not found';
    return Files;
}
