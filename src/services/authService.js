import jwt from 'jsonwebtoken';
import moment from 'moment';
import User from '../models/user.js';

const createJWT = (user) => {
    const payload = {
        _id: user._id,
        user: user.usuario,
        iat: moment().unix(),
        exp: moment().add(1, 'day').unix(),
    }
    return jwt.sign(payload, process.env.JWT_SECRET)
}

const verifyLoginCredentials = async (user, password) => {
    const users = await User.findOne({ user: user, password: password })
        .then((users) => {
            if (!users){
                return {
                    code: 404,
                    error: 'Error de autenticación, su email o su clave no coinciden.'
                }
            }
            return users;
        })
        .catch((err) => {
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