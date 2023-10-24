const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    cmenu: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cmenu"
    },
    cmenu_principal: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cmenu_principal"
    },
    cmenu_secundario: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cmenu_secundario"
    },
    xmenu_principal: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "xmenu_principal"
    },
    xmenu_secundario: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "xmenu_secundario"
    },
    xruta_principal: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "xruta_principal"
    },
    xruta_secundaria: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "xruta_secundaria"
    },
    xmenu_principal_en: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "xmenu_principal_en"
    },
    xmenu_secundario_en: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "xmenu_secundario_en"
    },
    iactivo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "iactivo"
    },
    cusuario: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cusuario"
    }
  };
  const options = {
    tableName: "semenu",
    comment: "",
    indexes: []
  };
  const SemenuModel = sequelize.define("semenu_model", attributes, options);
  return SemenuModel;
};