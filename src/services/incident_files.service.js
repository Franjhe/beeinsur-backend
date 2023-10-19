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
    return await db.Incident_files.findAll();
}

async function getById(id) {
    return await getIncident_files(id);
}

async function create(params) {
    // validate
    if (await db.Incident_files.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Incident_files = new db.Incident_files(params);

    // save Incident_files
    await Incident_files.save();
}

async function update(id, params) {
    const Incident_files = await getIncident_files(id);


    // copy params to Incident_files and save
    Object.assign(Incident_files, params);
    await Incident_files.save();
}

async function _delete(id) {
    const Incident_files = await getIncident_files(id);
    await Incident_files.destroy();
}

// helper functions

async function getIncident_files(id) {
    const Incident_files = await db.Incident_files.findByPk(id);
    if (!Incident_files) throw 'Incident_files not found';
    return Incident_files;
}
