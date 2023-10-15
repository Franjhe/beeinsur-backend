const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_insurance: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_insurance",
      references: {
        key: "id_insurance",
        model: "insurances_model"
      }
    },
    id_declaration_pathology: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_declaration_pathology",
      references: {
        key: "id_declaration_pathology",
        model: "declaration_pathology_model"
      }
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_user",
      references: {
        key: "id_user",
        model: "users_model"
      }
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "create_date"
    }
  };
  const options = {
    tableName: "insurance_declaration_pathology",
    comment: "",
    indexes: [{
      name: "form_declaration_p",
      unique: false,
      type: "BTREE",
      fields: ["id_insurance"]
    }, {
      name: "declaration_declaration_p",
      unique: false,
      type: "BTREE",
      fields: ["id_declaration_pathology"]
    }, {
      name: "user_declaration_p",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const InsuranceDeclarationPathologyModel = sequelize.define("insurance_declaration_pathology_model", attributes, options);
  return InsuranceDeclarationPathologyModel;
};