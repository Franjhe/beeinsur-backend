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
    return await db.Campaign_lists.findAll();
}

async function getById(id) {
    return await getCampaign_lists(id);
}

async function create(params) {
    // validate
    if (await db.Campaign_lists.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Campaign_lists = new db.Campaign_lists(params);

    // save Campaign_lists
    await Campaign_lists.save();
}

async function update(id, params) {
    const Campaign_lists = await getCampaign_lists(id);


    // copy params to Campaign_lists and save
    Object.assign(Campaign_lists, params);
    await Campaign_lists.save();
}

async function _delete(id) {
    const Campaign_lists = await getCampaign_lists(id);
    await Campaign_lists.destroy();
}

// helper functions

async function getCampaign_lists(id) {
    const Campaign_lists = await db.Campaign_lists.findByPk(id);
    if (!Campaign_lists) throw 'Campaign_lists not found';
    return Campaign_lists;
}
