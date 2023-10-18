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
    return await db.Advisers_schedules.findAll();
}

async function getById(id) {
    return await getAdvisers_schedules(id);
}

async function create(params) {
    // validate
    if (await db.Advisers_schedules.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Advisers_schedules = new db.Advisers_schedules(params);

    // save Advisers_schedules
    await Advisers_schedules.save();
}

async function update(id, params) {
    const Advisers_schedules = await getAdvisers_schedules(id);


    // copy params to Advisers_schedules and save
    Object.assign(Advisers_schedules, params);
    await Advisers_schedules.save();
}

async function _delete(id) {
    const Advisers_schedules = await getAdvisers_schedules(id);
    await Advisers_schedules.destroy();
}

// helper functions

async function getAdvisers_schedules(id) {
    const Advisers_schedules = await db.Advisers_schedules.findByPk(id);
    if (!Advisers_schedules) throw 'Advisers_schedules not found';
    return Advisers_schedules;
}
