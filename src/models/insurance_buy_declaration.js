const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_buy: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_buy",
      references: {
        key: "id_buy",
        model: "insurance_buy_model"
      }
    },
    id_declaration_health: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_declaration_health",
      references: {
        key: "id_declaration_health",
        model: "declaration_health_model"
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    option_select: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "option_select"
    }
  };
  const options = {
    tableName: "insurance_buy_declaration",
    comment: "",
    indexes: [{
      name: "buy_declaraction",
      unique: false,
      type: "BTREE",
      fields: ["id_buy"]
    }, {
      name: "declaraction_buy",
      unique: false,
      type: "BTREE",
      fields: ["id_declaration_health"]
    }]
  };
  const InsuranceBuyDeclarationModel = sequelize.define("insurance_buy_declaration_model", attributes, options);
  return InsuranceBuyDeclarationModel;
};