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
    return await db.Campaigns_push_send.findAll();
}

async function getById(id) {
    return await getCampaigns_push_send(id);
}

async function create(params) {
    // validate
    if (await db.Campaigns_push_send.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Campaigns_push_send = new db.Campaigns_push_send(params);

    // save Campaigns_push_send
    await Campaigns_push_send.save();
}

async function update(id, params) {
    const Campaigns_push_send = await getCampaigns_push_send(id);


    // copy params to Campaigns_push_send and save
    Object.assign(Campaigns_push_send, params);
    await Campaigns_push_send.save();
}

async function _delete(id) {
    const Campaigns_push_send = await getCampaigns_push_send(id);
    await Campaigns_push_send.destroy();
}

// helper functions

async function getCampaigns_push_send(id) {
    const Campaigns_push_send = await db.Campaigns_push_send.findByPk(id);
    if (!Campaigns_push_send) throw 'Campaigns_push_send not found';
    return Campaigns_push_send;
}
