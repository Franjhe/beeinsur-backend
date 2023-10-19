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
    return await db.campaigns_push_lists.findAll();
}

async function getById(id) {
    return await getcampaigns_push_lists(id);
}

async function create(params) {
    // validate
    if (await db.campaigns_push_lists.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const campaigns_push_lists = new db.campaigns_push_lists(params);

    // save campaigns_push_lists
    await campaigns_push_lists.save();
}

async function update(id, params) {
    const campaigns_push_lists = await getcampaigns_push_lists(id);


    // copy params to campaigns_push_lists and save
    Object.assign(campaigns_push_lists, params);
    await campaigns_push_lists.save();
}

async function _delete(id) {
    const campaigns_push_lists = await getcampaigns_push_lists(id);
    await campaigns_push_lists.destroy();
}

// helper functions

async function getcampaigns_push_lists(id) {
    const campaigns_push_lists = await db.campaigns_push_lists.findByPk(id);
    if (!campaigns_push_lists) throw 'campaigns_push_lists not found';
    return campaigns_push_lists;
}
