import News from '../models/News.js'

const getNews = async () => {
    const NewsData = await News.find()
        .then((NewsData) => {
            if (!NewsData){
                return {
                    code: 404,
                    error: 'Error, no existe ninguna noticia para mostrar'
                }
            }
            return NewsData;
        })
        .catch((err) => {
            return {
                code: 500,
                error: err.message
            }
        })
    if (NewsData.error) {
        return {
            code: NewsData.code,
            error: NewsData.error
        }
    }
    return {
        NewsData: NewsData
    }
}

const Image = async (myImage) => {
    var encode_img = img.toString('base64');
    var final_img = {
        contentType:req.file.mimetype,
        image:new Buffer(encode_img,'base64')
    };
    const ImageData = await News.create({ final_img })
        .then((ImageData) => {
            if (!ImageData){
                return {
                    code: 404,
                    error: 'Error, no existe ninguna noticia para mostrar'
                }
            }
            return ImageData;
        })
        .catch((err) => {
            return {
                code: 500,
                error: err.message
            }
        })
    if (ImageData.error) {
        return {
            code: ImageData.code,
            error: ImageData.error
        }
    }
    return {
        ImageData: ImageData
    }
}

export default {
    getNews,
    Image
    
}