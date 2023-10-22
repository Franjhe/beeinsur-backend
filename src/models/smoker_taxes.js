const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_smoker_tax: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_smoker_tax"
    },
    id_insurance: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_insurance",
      // references: {
      //   key: "id_insurance",
      //   model: "insurances_model"
      // }
    },
    type_tax: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "type_tax"
    },
    amount_tax: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "amount_tax"
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
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_status",
      // references: {
      //   key: "id_status",
      //   model: "status_model"
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
    tableName: "smoker_taxes",
    comment: "",
    indexes: [{
      name: "smoker_user",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "smoker_status",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "smoker_insurance",
      unique: false,
      type: "BTREE",
      fields: ["id_insurance"]
    }]
  };
  const SmokerTaxesModel = sequelize.define("smoker_taxes_model", attributes, options);
  return SmokerTaxesModel;
};