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
    return await db.Campaigns.findAll();
}

async function getById(id) {
    return await getCampaigns(id);
}

async function create(params) {
    // validate
    if (await db.Campaigns.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Campaigns = new db.Campaigns(params);

    // save Campaigns
    await Campaigns.save();
}

async function update(id, params) {
    const Campaigns = await getCampaigns(id);


    // copy params to Campaigns and save
    Object.assign(Campaigns, params);
    await Campaigns.save();
}

async function _delete(id) {
    const Campaigns = await getCampaigns(id);
    await Campaigns.destroy();
}

// helper functions

async function getCampaigns(id) {
    const Campaigns = await db.Campaigns.findByPk(id);
    if (!Campaigns) throw 'Campaigns not found';
    return Campaigns;
}
