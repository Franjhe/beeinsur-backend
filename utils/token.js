const jwt = require('jsonwebtoken');
const config = require('./../config.json');
const { logger } = require('./logger');

const generate = (id) => jwt.sign({ id }, config.database.jwt_secret, { expiresIn: '1d'});

const decode = (token) => {
    try {
        return jwt.verify(token, config.database.jwt_secret)
    } catch (error) {
        logger.error(error);
    }
};

module.exports = {
    generate,
    decode
}