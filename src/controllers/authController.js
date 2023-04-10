import authService from '../services/authService.js';

const signIn = async (req, res) => {
    const verifyLoginCredentials = await authService.verifyLoginCredentials(req.body.user, req.body.password);
    if (verifyLoginCredentials.error) {
        return res
            .status(verifyLoginCredentials.code)
            .send({
                message: verifyLoginCredentials.error
            });
    }
    const jwt = await authService.createJWT(verifyLoginCredentials.userData);
    return res
        .status(200)
        .send({
            message: 'Usuario Autenticado',
            token: 'Bearer ' + jwt
        });
};

export default {
    signIn
}