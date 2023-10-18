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
    return await db.Campaigns_push.findAll();
}

async function getById(id) {
    return await getCampaigns_push(id);
}

async function create(params) {
    // validate
    if (await db.Campaigns_push.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Campaigns_push = new db.Campaigns_push(params);

    // save Campaigns_push
    await Campaigns_push.save();
}

async function update(id, params) {
    const Campaigns_push = await getCampaigns_push(id);


    // copy params to Campaigns_push and save
    Object.assign(Campaigns_push, params);
    await Campaigns_push.save();
}

async function _delete(id) {
    const Campaigns_push = await getCampaigns_push(id);
    await Campaigns_push.destroy();
}

// helper functions

async function getCampaigns_push(id) {
    const Campaigns_push = await db.Campaigns_push.findByPk(id);
    if (!Campaigns_push) throw 'Campaigns_push not found';
    return Campaigns_push;
}
