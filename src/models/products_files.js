const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_product: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_product",
      references: {
        key: "id_product",
        model: "products_model"
      }
    },
    id_file: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_file",
      references: {
        key: "id_file",
        model: "downloadable_files_model"
      }
    }
  };
  const options = {
    tableName: "products_files",
    comment: "",
    indexes: [{
      name: "products_files",
      unique: false,
      type: "BTREE",
      fields: ["id_product"]
    }, {
      name: "products_files2",
      unique: false,
      type: "BTREE",
      fields: ["id_file"]
    }]
  };
  const ProductsFilesModel = sequelize.define("products_files_model", attributes, options);
  return ProductsFilesModel;
};