const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_term: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_term"
    },
    id_price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_price",
      // references: {
      //   key: "id_price",
      //   model: "insurance_prices_model"
      // }
    },
    id_country: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_country"
    },
    description_term: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description_term"
    },
    html_term: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "html_term"
    },
    config_term: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "config_term"
    },
    amount_term: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "amount_term"
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_status",
      // references: {
      //   key: "id_status",
      //   model: "status_model"
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
    tableName: "insurance_terms",
    comment: "",
    indexes: [{
      name: "price_term",
      unique: false,
      type: "BTREE",
      fields: ["id_price"]
    }, {
      name: "status_term",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_term",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const InsuranceTermsModel = sequelize.define("insurance_terms_model", attributes, options);
  return InsuranceTermsModel;
};