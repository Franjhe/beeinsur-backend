const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_beneficiary_temp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_beneficiary_temp"
    },
    id_buy_temp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_buy_temp"
    },
    identification: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "identification"
    },
    name_beneficiary: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_beneficiary"
    },
    percentage_beneficiary: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "percentage_beneficiary"
    },
    id_relationship: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
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
    tableName: "insurance_beneficiaries_temp",
    comment: "",
    indexes: []
  };
  const InsuranceBeneficiariesTempModel = sequelize.define("insurance_beneficiaries_temp_model", attributes, options);
  return InsuranceBeneficiariesTempModel;
};