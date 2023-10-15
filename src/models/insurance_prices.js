const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_price"
    },
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
    price_insurance: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "price_insurance"
    },
    descripcion_price: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descripcion_price"
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_status",
      references: {
        key: "id_status",
        model: "status_model"
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
    tableName: "insurance_prices",
    comment: "",
    indexes: [{
      name: "status_prices",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_prices",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "form_prices",
      unique: false,
      type: "BTREE",
      fields: ["id_insurance"]
    }]
  };
  const InsurancePricesModel = sequelize.define("insurance_prices_model", attributes, options);
  return InsurancePricesModel;
};