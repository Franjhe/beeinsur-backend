const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        description: { type: DataTypes.STRING, allowNull: false },
        ambit: { type: DataTypes.STRING, allowNull: false },

    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude:{} }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Proyect', attributes, options);
}
