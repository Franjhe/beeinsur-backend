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
    return await db.Ads.findAll();
}

async function getById(id) {
    return await getAds(id);
}

async function create(params) {
    // validate
    if (await db.Ads.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Ads = new db.Ads(params);

    // save Ads
    await Ads.save();
}

async function update(id, params) {
    const Ads = await getAds(id);


    // copy params to Ads and save
    Object.assign(Ads, params);
    await Ads.save();
}

async function _delete(id) {
    const Ads = await getAds(id);
    await Ads.destroy();
}

// helper functions

async function getAds(id) {
    const Ads = await db.Ads.findByPk(id);
    if (!Ads) throw 'Ads not found';
    return Ads;
}
