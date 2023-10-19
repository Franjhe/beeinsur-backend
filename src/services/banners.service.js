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
    return await db.Banners.findAll();
}

async function getById(id) {
    return await getBanners(id);
}

async function create(params) {
    // validate
    if (await db.Banners.findOne({ where: { description: params.description } })) {
        throw 'Description "' + params.description + '" is already registered';
    }

    const Banners = new db.Banners(params);

    // save Banners
    await Banners.save();
}

async function update(id, params) {
    const Banners = await getBanners(id);


    // copy params to Banners and save
    Object.assign(Banners, params);
    await Banners.save();
}

async function _delete(id) {
    const Banners = await getBanners(id);
    await Banners.destroy();
}

// helper functions

async function getBanners(id) {
    const Banners = await db.Banners.findByPk(id);
    if (!Banners) throw 'Banners not found';
    return Banners;
}
