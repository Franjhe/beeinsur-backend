const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_fee: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_fee"
    },
    id_insurance: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_insurance"
    }
  };
  const options = {
    tableName: "fee_insurances",
    comment: "",
    indexes: []
  };
  const FeeInsurancesModel = sequelize.define("fee_insurances_model", attributes, options);
  return FeeInsurancesModel;
};