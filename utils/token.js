const jwt = require('jsonwebtoken');

const config = require('./../config.json');
// Clave secreta para firmar el token (cambia esto en un entorno de producción)
const secretKey = config.database.jwt_secret;

async function generate(params) {

    // Datos que deseas incluir en el token
    const payload = {
        userId: params.id,
        username: params.title,
        role: params.role,
     };

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    return token

}

async function decoded(params) {
// Decodifica el token para obtener los datos originales
try {
    const decoded = jwt.verify(token, secretKey);
    // console.log('Token decodificado:', decoded);
  } catch (error) {
    // console.error('Error al decodificar el token:', error.message);
  }
}

module.exports = {
    generate,
    decoded
}