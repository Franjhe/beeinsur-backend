const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_buy_temp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_buy_temp"
    },
    id_declaration_health: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_declaration_health"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    option_select: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "option_select"
    }
  };
  const options = {
    tableName: "insurance_buy_declaration_temp",
    comment: "",
    indexes: []
  };
  const InsuranceBuyDeclarationTempModel = sequelize.define("insurance_buy_declaration_temp_model", attributes, options);
  return InsuranceBuyDeclarationTempModel;
};