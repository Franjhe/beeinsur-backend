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
    return await db.Incident_service.findAll();
}

async function getById(id) {
    return await getIncident_service(id);
}

async function create(params) {
    // validate
    if (await db.Incident_service.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Incident_service = new db.Incident_service(params);

    // save Incident_service
    await Incident_service.save();
}

async function update(id, params) {
    const Incident_service = await getIncident_service(id);


    // copy params to Incident_service and save
    Object.assign(Incident_service, params);
    await Incident_service.save();
}

async function _delete(id) {
    const Incident_service = await getIncident_service(id);
    await Incident_service.destroy();
}

// helper functions

async function getIncident_service(id) {
    const Incident_service = await db.Incident_service.findByPk(id);
    if (!Incident_service) throw 'Incident_service not found';
    return Incident_service;
}
