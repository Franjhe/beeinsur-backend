const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_category: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_category"
    },
    id_blog: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_blog",
      // references: {
      //   key: "id_blog",
      //   model: "blogs_model"
      // }
    }
  };
  const options = {
    tableName: "blog_categories",
    comment: "",
    indexes: [{
      name: "blog_categoria",
      unique: false,
      type: "BTREE",
      fields: ["id_blog"]
    }]
  };
  const BlogCategoriesModel = sequelize.define("blog_categories_model", attributes, options);
  return BlogCategoriesModel;
};