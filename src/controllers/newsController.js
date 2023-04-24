import newsService from '../services/newsService.js';
import multer from 'multer';

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

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

const CreateNews = async (req, res) => {
    const News = await newsService.CreateNews(req.body);
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

const UpdateNews = async (req, res) => {
    const News = await newsService.UpdateNews(req.body, req.file.buffer);
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

export default {
    getNews,
    CreateNews,
    UpdateNews
}