const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_banner: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_banner"
    },
    name_banner: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_banner"
    },
    image_banner: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "image_banner"
    },
    description_banner: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description_banner"
    },
    link_banner: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "link_banner"
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_status",
      references: {
        key: "id_status",
        model: "status_model"
      }
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_user",
      references: {
        key: "id_user",
        model: "users_model"
      }
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "create_date"
    },
    language: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "language"
    }
  };
  const options = {
    tableName: "banners",
    comment: "",
    indexes: [{
      name: "status_banner",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_banner",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const BannersModel = sequelize.define("banners_model", attributes, options);
  return BannersModel;
};