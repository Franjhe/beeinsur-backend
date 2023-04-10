import Goals from '../models/Goals.js'

const getGoals = async () => {
    const GoalsData = await Goals.find()
        .then((GoalsData) => {
            if (!GoalsData){
                return {
                    code: 404,
                    error: 'Error, no existe ninguna noticia para mostrar'
                }
            }
            return GoalsData;
        })
        .catch((err) => {
            return {
                code: 500,
                error: err.message
            }
        })
    if (GoalsData.error) {
        return {
            code: GoalsData.code,
            error: GoalsData.error
        }
    }
    return {
        GoalsData: GoalsData
    }
}


export default {
    getGoals,
    
}