import jwt from 'jsonwebtoken';
import moment from 'moment';
import User from '../db/user.js';

const createJWT = (user) => {
    const payload = {
        _id: user._id,
        user: user.usuario,
        iat: moment().unix(),
        exp: moment().add(1, 'day').unix(),
    }
    return jwt.sign(payload, process.env.JWT_SECRET)
}

const verifyLoginCredentials =  async ( params) => {
    console.log(params)
    const users = await User.search( 
        {  
            user : params.user ,
            password : params.password , 

        }
         )
        .then((users) => {
            if (!users){
                return {
                    code: 404,
                    error: 'Error al verificar un usuario'
                }
            }
            return users;
        })
        .catch((err) => {
            console.log(err.message)
            return {
                code: 500,
                error: err.message
            }
        })
    if (users.error) {
        return {
            code: users.code,
            error: users.error
        }
    }

    return {

        userData: users.toJSON()
    }
}

export default {
    createJWT,
    verifyLoginCredentials
}