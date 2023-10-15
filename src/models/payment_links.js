const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_link: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_link"
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
    id_buy: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_buy"
    },
    token_link: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "token_link"
    },
    token_encrypt: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "token_encrypt"
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "9",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_status"
    },
    id_agency: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_agency"
    },
    id_adviser: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_adviser"
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
    tableName: "payment_links",
    comment: "",
    indexes: []
  };
  const PaymentLinksModel = sequelize.define("payment_links_model", attributes, options);
  return PaymentLinksModel;
};