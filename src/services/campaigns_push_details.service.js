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
    return await db.Campaigns_push_details.findAll();
}

async function getById(id) {
    return await getCampaigns_push_details(id);
}

async function create(params) {
    // validate
    if (await db.Campaigns_push_details.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Campaigns_push_details = new db.Campaigns_push_details(params);

    // save Campaigns_push_details
    await Campaigns_push_details.save();
}

async function update(id, params) {
    const Campaigns_push_details = await getCampaigns_push_details(id);


    // copy params to Campaigns_push_details and save
    Object.assign(Campaigns_push_details, params);
    await Campaigns_push_details.save();
}

async function _delete(id) {
    const Campaigns_push_details = await getCampaigns_push_details(id);
    await Campaigns_push_details.destroy();
}

// helper functions

async function getCampaigns_push_details(id) {
    const Campaigns_push_details = await db.Campaigns_push_details.findByPk(id);
    if (!Campaigns_push_details) throw 'Campaigns_push_details not found';
    return Campaigns_push_details;
}
