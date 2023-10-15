const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_beneficiary: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_beneficiary"
    },
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
    identification: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "identification"
    },
    name_beneficiary: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_beneficiary"
    },
    percentage_beneficiary: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "percentage_beneficiary"
    },
    id_relationship: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_relationship"
    },
    date_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_birth"
    }
  };
  const options = {
    tableName: "insurance_beneficiaries",
    comment: "",
    indexes: [{
      name: "buy_beneficiario",
      unique: false,
      type: "BTREE",
      fields: ["id_buy"]
    }]
  };
  const InsuranceBeneficiariesModel = sequelize.define("insurance_beneficiaries_model", attributes, options);
  return InsuranceBeneficiariesModel;
};