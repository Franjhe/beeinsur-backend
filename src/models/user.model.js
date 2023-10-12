const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        xcorreo: { type: DataTypes.STRING, allowNull: false },
        xcontrasena: { type: DataTypes.STRING, allowNull: false },
        xnombre: { type: DataTypes.STRING, allowNull: false },
        xusuario: { type: DataTypes.STRING, allowNull: false },
        cstatus: { type: DataTypes.NUMBER, allowNull: false },
        clenguaje: { type: DataTypes.NUMBER, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['xcontrasena'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: { include: ['xcontrasena'] } }
        }
    };

    return sequelize.define('User', attributes, options);
}