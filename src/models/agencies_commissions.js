const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_agency: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_agency",
      // references: {
      //   key: "id_agency",
      //   model: "agencies_model"
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
    tableName: "agencies_commissions",
    comment: "",
    indexes: [{
      name: "product_comission",
      unique: false,
      type: "BTREE",
      fields: ["id_product"]
    }, {
      name: "agencies_comission",
      unique: false,
      type: "BTREE",
      fields: ["id_agency"]
    }]
  };
  const AgenciesCommissionsModel = sequelize.define("agencies_commissions_model", attributes, options);
  return AgenciesCommissionsModel;
};