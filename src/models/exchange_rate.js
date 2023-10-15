const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_rate: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_rate"
    },
    amount_rate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "amount_rate"
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
    tableName: "exchange_rate",
    comment: "",
    indexes: [{
      name: "user_rate",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const ExchangeRateModel = sequelize.define("exchange_rate_model", attributes, options);
  return ExchangeRateModel;
};