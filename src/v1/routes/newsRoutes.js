import express from 'express';
import authenticate from '../../middlewares/authenticate.js'
import NewsData from '../../controllers/newsController.js';

const router = express.Router();

router
    .get    ("/news"           , NewsData.getNews)
    .get    ("/news:id"        , authenticate, NewsData.getNews)
    .post   ("/news"           , authenticate, NewsData.getNews)
    .post   ("/uploadphoto"    , authenticate, NewsData.postImage)
    .put    ("/news:id"        , authenticate, NewsData.getNews)
    .delete ("/news:id"        , authenticate, NewsData.getNews)

export default router;