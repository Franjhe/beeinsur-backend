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
    return await db.Status.findAll();
}

async function getById(id) {
    return await getStatus(id);
}

async function create(params) {
    // validate
    if (await db.Status.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Status = new db.Status(params);

    // save Status
    await Status.save();
}

async function update(id, params) {
    const Status = await getStatus(id);


    // copy params to Status and save
    Object.assign(Status, params);
    await Status.save();
}

async function _delete(id) {
    const Status = await getStatus(id);
    await Status.destroy();
}

// helper functions

async function getStatus(id) {
    const Status = await db.Status.findByPk(id);
    if (!Status) throw 'Status not found';
    return Status;
}
