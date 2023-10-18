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
    return await db.Information.findAll();
}

async function getById(id) {
    return await getInformation(id);
}

async function create(params) {
    // validate
    if (await db.Information.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Information = new db.Information(params);

    // save Information
    await Information.save();
}

async function update(id, params) {
    const Information = await getInformation(id);


    // copy params to Information and save
    Object.assign(Information, params);
    await Information.save();
}

async function _delete(id) {
    const Information = await getInformation(id);
    await Information.destroy();
}

// helper functions

async function getInformation(id) {
    const Information = await db.Information.findByPk(id);
    if (!Information) throw 'Information not found';
    return Information;
}
