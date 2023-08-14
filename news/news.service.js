const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.News.findAll();
}

async function getById(id) {
    return await getNews(id);
}

async function create(params) {
    // validate
    if (await db.News.findOne({ where: { title: params.title } })) {
        throw 'Title "' + params.title + '" is already registered';
    }

    const news = new db.News(params);

    // save news
    await news.save();
}


async function update(id, params) {
    const news = await getNews(id);

    // validate
    const contentChanged = params.content && news.content !== params.content;
    if (contentChanged && await db.News.findOne({ where: { content: params.content } })) {
        throw 'Content "' + params.content + '" is already registered';
    }

    // Actualiza la ruta de la imagen si se proporcionó
    if (params.imagePath) {
        news.image = params.imagePath;
    }

    // copy params to news and save
    Object.assign(news, params);
    await news.save();
}

async function _delete(id) {
    const news = await getNews(id);
    await news.destroy();
}

// helper functions

async function getNews(id) {
    const news = await db.news.findByPk(id);
    if (!news) throw 'news not found';
    return news;
}
