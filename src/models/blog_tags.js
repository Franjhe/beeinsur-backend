const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_tag: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_tag"
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
    tableName: "blog_tags",
    comment: "",
    indexes: [{
      name: "blog_tags",
      unique: false,
      type: "BTREE",
      fields: ["id_blog"]
    }]
  };
  const BlogTagsModel = sequelize.define("blog_tags_model", attributes, options);
  return BlogTagsModel;
};