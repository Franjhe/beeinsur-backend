const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        description: { type: DataTypes.STRING, allowNull: false },
        description_large: { type: DataTypes.STRING(300), allowNull: false },
        ambit: { type: DataTypes.STRING, allowNull: true },
        quantity: { type: DataTypes.INTEGER, allowNull: false },

    };

    return sequelize.define('Proyect', attributes);
}
