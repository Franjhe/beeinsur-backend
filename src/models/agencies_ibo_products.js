const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_insurance: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_insurance"
    },
    id_agency_ibo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_agency_ibo",
      references: {
        key: "id_agency_ibo",
        model: "agencies_ibo_model"
      }
    }
  };
  const options = {
    tableName: "agencies_ibo_products",
    comment: "",
    indexes: [{
      name: "agency_ibo",
      unique: false,
      type: "BTREE",
      fields: ["id_agency_ibo"]
    }]
  };
  const AgenciesIboProductsModel = sequelize.define("agencies_ibo_products_model", attributes, options);
  return AgenciesIboProductsModel;
};