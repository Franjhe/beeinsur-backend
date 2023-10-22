const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_visiontravel: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_visiontravel"
    },
    id_subscriber: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_subscriber"
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
    tableName: "insurance_visiontravel_test",
    comment: "",
    indexes: []
  };
  const InsuranceVisiontravelTestModel = sequelize.define("insurance_visiontravel_test_model", attributes, options);
  return InsuranceVisiontravelTestModel;
};