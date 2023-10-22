const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_adviser: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_adviser",
      // references: {
      //   key: "id_adviser",
      //   model: "advisers_model"
      // }
    },
    id_product: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_product",
      // references: {
      //   key: "id_product",
      //   model: "products_model"
      // }
    },
    commission: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "commission"
    }
  };
  const options = {
    tableName: "advisers_commissions",
    comment: "",
    indexes: [{
      name: "adviser comision",
      unique: false,
      type: "BTREE",
      fields: ["id_adviser"]
    }, {
      name: "adviser prouct",
      unique: false,
      type: "BTREE",
      fields: ["id_product"]
    }]
  };
  const AdvisersCommissionsModel = sequelize.define("advisers_commissions_model", attributes, options);
  return AdvisersCommissionsModel;
};