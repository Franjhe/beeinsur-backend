import Goals from '../db/Goals.js'

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

const UpdateGoals = async ( params) => {
    const GoalsDataUpdate = await Goals.updateMany( 
        {   canchas : params.canchas , 
            parques : params.parques ,
            c_integral : params.c_integral , 
            c_educativos : params.c_educativos
        }
         )
        .then((GoalsDataUpdate) => {
            if (!GoalsDataUpdate){
                return {
                    code: 404,
                    error: 'Error, no existe ningun logro para actualizar'
                }
            }
            return GoalsDataUpdate;
        })
        .catch((err) => {
            return {
                code: 500,
                error: err.message
            }
        })
    if (GoalsDataUpdate.error) {
        return {
            code: GoalsDataUpdate.code,
            error: GoalsDataUpdate.error
        }
    }
    return {
        GoalsDataUpdate: GoalsDataUpdate
    }
}

export default {
    getGoals,
    UpdateGoals
}