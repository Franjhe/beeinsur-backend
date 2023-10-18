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
    return await db.Campaign_send.findAll();
}

async function getById(id) {
    return await getCampaign_send(id);
}

async function create(params) {
    // validate
    if (await db.Campaign_send.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Campaign_send = new db.Campaign_send(params);

    // save Campaign_send
    await Campaign_send.save();
}

async function update(id, params) {
    const Campaign_send = await getCampaign_send(id);


    // copy params to Campaign_send and save
    Object.assign(Campaign_send, params);
    await Campaign_send.save();
}

async function _delete(id) {
    const Campaign_send = await getCampaign_send(id);
    await Campaign_send.destroy();
}

// helper functions

async function getCampaign_send(id) {
    const Campaign_send = await db.Campaign_send.findByPk(id);
    if (!Campaign_send) throw 'Campaign_send not found';
    return Campaign_send;
}
