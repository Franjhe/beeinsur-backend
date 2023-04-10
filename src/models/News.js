import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    tittle: {
        type: String,
    },
    content: {
        type: String,
    },
    image: 
    {
        data: Buffer,
        contentType: String
    },
    id_news: {
        type: String,
    },
    author: {
        type: String,
    },

})

const news = mongoose.model('news', NewsSchema, 'news');
export default news;