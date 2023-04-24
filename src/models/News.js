import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    date: {
        type: String,
    },
    tittle: {
        type: String,
    },
    content: {
        type: String,
    },
    image: 
    {
        type: Buffer,
    },

    author: {
        type: String,
    },

})

const news = mongoose.model('news', NewsSchema, 'news');
export default news;