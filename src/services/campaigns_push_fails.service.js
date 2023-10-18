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
    return await db.Campaigns_push_fails.findAll();
}

async function getById(id) {
    return await getCampaigns_push_fails(id);
}

async function create(params) {
    // validate
    if (await db.Campaigns_push_fails.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Campaigns_push_fails = new db.Campaigns_push_fails(params);

    // save Campaigns_push_fails
    await Campaigns_push_fails.save();
}

async function update(id, params) {
    const Campaigns_push_fails = await getCampaigns_push_fails(id);


    // copy params to Campaigns_push_fails and save
    Object.assign(Campaigns_push_fails, params);
    await Campaigns_push_fails.save();
}

async function _delete(id) {
    const Campaigns_push_fails = await getCampaigns_push_fails(id);
    await Campaigns_push_fails.destroy();
}

// helper functions

async function getCampaigns_push_fails(id) {
    const Campaigns_push_fails = await db.Campaigns_push_fails.findByPk(id);
    if (!Campaigns_push_fails) throw 'Campaigns_push_fails not found';
    return Campaigns_push_fails;
}
