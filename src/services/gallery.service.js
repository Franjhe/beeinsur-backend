const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Gallery.findAll();
}

async function getById(id) {
    return await getGallery(id);
}

async function create(params) {
    // validate
    if (await db.Gallery.findOne({ where: { image: params.image } })) {
        throw 'Image "' + params.image + '" is already registered';
    }

    const gallery = new db.Gallery(params);

    // save gallery
    await gallery.save();
}

async function update(id, params) {
    const gallery = await getGallery(id);

    // validate
    const imageChanged = params.image && gallery.image !== params.image;
    if (imageChanged && await db.Gallery.findOne({ where: { image: params.image } })) {
        throw 'Image "' + params.image + '" is already registered';
    }


    // copy params to gallery and save
    Object.assign(gallery, params);
    await gallery.save();
}

async function _delete(id) {
    const gallery = await getGallery(id);
    await gallery.destroy();
}

// helper functions

async function getGallery(id) {
    const gallery = await db.Gallery.findByPk(id);
    if (!gallery) throw 'gallery not found';
    return gallery;
}
