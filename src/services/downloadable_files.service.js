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
    return await db.Downloadable_files.findAll();
}

async function getById(id) {
    return await getDownloadable_files(id);
}

async function create(params) {
    // validate
    if (await db.Downloadable_files.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Downloadable_files = new db.Downloadable_files(params);

    // save Downloadable_files
    await Downloadable_files.save();
}

async function update(id, params) {
    const Downloadable_files = await getDownloadable_files(id);


    // copy params to Downloadable_files and save
    Object.assign(Downloadable_files, params);
    await Downloadable_files.save();
}

async function _delete(id) {
    const Downloadable_files = await getDownloadable_files(id);
    await Downloadable_files.destroy();
}

// helper functions

async function getDownloadable_files(id) {
    const Downloadable_files = await db.Downloadable_files.findByPk(id);
    if (!Downloadable_files) throw 'Downloadable_files not found';
    return Downloadable_files;
}
