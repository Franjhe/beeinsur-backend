const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        xnombre: { type: DataTypes.STRING, allowNull: false },
        xnombre_en: { type: DataTypes.STRING, allowNull: false },
        xdescripcion: { type: DataTypes.STRING, allowNull: false },
        xdescripcion_en: { type: DataTypes.STRING, allowNull: false },
        xpreview: { type: DataTypes.STRING, allowNull: false },
        xpreview_en: { type: DataTypes.STRING, allowNull: false },
        nprecio: { type: DataTypes.NUMBER, allowNull: false },
        image_product: { type: DataTypes.STRING, allowNull: false },
        nporcentaje_agencia_master: { type: DataTypes.NUMBER, allowNull: false },
        nporcentaje_super_agencia: { type: DataTypes.NUMBER, allowNull: false },
        nporcentaje_asesores: { type: DataTypes.NUMBER, allowNull: false },
        cusuario_creacion: { type: DataTypes.NUMBER, allowNull: false },
        cusuario_modificacion: { type: DataTypes.NUMBER, allowNull: false },
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

    return sequelize.define('Product', attributes, options);
}