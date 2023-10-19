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
    return await db.Profiles.findAll();
}

async function getById(id) {
    return await getProfiles(id);
}

async function create(params) {
    // validate
    if (await db.Profiles.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Profiles = new db.Profiles(params);

    // save Profiles
    await Profiles.save();
}

async function update(id, params) {
    const Profiles = await getProfiles(id);


    // copy params to Profiles and save
    Object.assign(Profiles, params);
    await Profiles.save();
}

async function _delete(id) {
    const Profiles = await getProfiles(id);
    await Profiles.destroy();
}

// helper functions

async function getProfiles(id) {
    const Profiles = await db.Profiles.findByPk(id);
    if (!Profiles) throw 'Profiles not found';
    return Profiles;
}
