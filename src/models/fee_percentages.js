const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_percentage: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_percentage"
    },
    id_fee: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_fee",
      references: {
        key: "id_fee",
        model: "fees_model"
      }
    },
    percentage: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "percentage"
    },
    fee_initial: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "fee_initial"
    }
  };
  const options = {
    tableName: "fee_percentages",
    comment: "",
    indexes: [{
      name: "fee_per",
      unique: false,
      type: "BTREE",
      fields: ["id_fee"]
    }]
  };
  const FeePercentagesModel = sequelize.define("fee_percentages_model", attributes, options);
  return FeePercentagesModel;
};