const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_category: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_category"
    },
    name_category: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_category"
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
    tableName: "categories",
    comment: "",
    indexes: [{
      name: "status_categoria",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_categoria",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const CategoriesModel = sequelize.define("categories_model", attributes, options);
  return CategoriesModel;
};