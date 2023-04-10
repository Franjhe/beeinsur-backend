import newsService from '../services/newsService.js';

const getNews = async (req, res) => {
    const News = await newsService.getNews();
    if (News.error) {
        return res
            .status(News.code)
            .send({
                message: News.error
            });
    }
    return res
        .status(200)
        .send({
            status: true,
            News: News,
        });
};

const postImage = async (req, res) => {
    const ImagePost = await newsService.Image(req.file.path,res.locals.decodedJWT.user);
    if (ImagePost.error) {
        return res
            .status(ImagePost.code)
            .send({
                message: ImagePost.error
            });
    }
    return res
        .status(200)
        .send({
            status: true,
            healthData: ImagePost.healthData,
        });
};

export default {
    getNews,
    postImage
}