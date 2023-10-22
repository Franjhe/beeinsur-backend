const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_insurance: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_insurance",
      // references: {
      //   key: "id_insurance",
      //   model: "insurances_model"
      // }
    },
    id_declaration_health: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_declaration_health",
      // references: {
      //   key: "id_declaration_health",
      //   model: "declaration_health_model"
      // }
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_user",
      // references: {
      //   key: "id_user",
      //   model: "users_model"
      // }
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "create_date"
    }
  };
  const options = {
    tableName: "insurance_declaration_health",
    comment: "",
    indexes: [{
      name: "user_declaration_u",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "form_declaration_u",
      unique: false,
      type: "BTREE",
      fields: ["id_insurance"]
    }, {
      name: "declaration_declaration_u",
      unique: false,
      type: "BTREE",
      fields: ["id_declaration_health"]
    }]
  };
  const InsuranceDeclarationHealthModel = sequelize.define("insurance_declaration_health_model", attributes, options);
  return InsuranceDeclarationHealthModel;
};