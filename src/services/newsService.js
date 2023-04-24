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

const CreateNews = async ( params) => {
    const NewsDataCreate = await News.create( 
        {  
            date : params.date ,
            content : params.content , 
            tittle : params.tittle,
            image : params.image , 
        }
         )
        .then((NewsDataCreate) => {
            if (!NewsDataCreate){
                return {
                    code: 404,
                    error: 'Error en crear una noticia'
                }
            }
            return NewsDataCreate;
        })
        .catch((err) => {
            console.log(err.message)
            return {
                code: 500,
                error: err.message
            }
        })
    if (NewsDataCreate.error) {
        return {
            code: NewsDataCreate.code,
            error: NewsDataCreate.error
        }
    }
    return {
        NewsDataCreate: NewsDataCreate
    }
}

const UpdateNews = async ( params) => {
    
    const NewsDataUpdate = await News.updateMany( 
        {  
            _id : params.id_news , 
            date : params.date ,
            content : params.content , 
            tittle : params.tittle,
            image : params.image , 
        }
         )
        .then((NewsDataUpdate) => {
            if (!NewsDataUpdate){
                return {
                    code: 404,
                    error: 'Error, no existe ninguna noticia para actualizar'
                }
            }
            return NewsDataUpdate;
        })
        .catch((err) => {
            return {
                code: 500,
                error: err.message
            }
        })
    if (NewsDataUpdate.error) {
        return {
            code: NewsDataUpdate.code,
            error: NewsDataUpdate.error
        }
    }
    return {
        NewsDataUpdate: NewsDataUpdate
    }
}

export default {
    getNews,
    CreateNews,
    UpdateNews   
}