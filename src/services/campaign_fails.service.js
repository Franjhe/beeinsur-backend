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
    return await db.Campaign_fails.findAll();
}

async function getById(id) {
    return await getCampaign_fails(id);
}

async function create(params) {
    // validate
    if (await db.Campaign_fails.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Campaign_fails = new db.Campaign_fails(params);

    // save Campaign_fails
    await Campaign_fails.save();
}

async function update(id, params) {
    const Campaign_fails = await getCampaign_fails(id);


    // copy params to Campaign_fails and save
    Object.assign(Campaign_fails, params);
    await Campaign_fails.save();
}

async function _delete(id) {
    const Campaign_fails = await getCampaign_fails(id);
    await Campaign_fails.destroy();
}

// helper functions

async function getCampaign_fails(id) {
    const Campaign_fails = await db.Campaign_fails.findByPk(id);
    if (!Campaign_fails) throw 'Campaign_fails not found';
    return Campaign_fails;
}
