const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_user"
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_name"
    },
    email_user: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email_user"
    },
    avatar_img: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "avatar.png",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "avatar_img"
    },
    systems_name: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "systems_name"
    },
    user_pass: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_pass"
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "token"
    },
    token_user: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "token_user"
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
    id_profile: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_profile",
      // references: {
      //   key: "id_profile",
      //   model: "profiles_model"
      // }
    }
  };
  const options = {
    tableName: "users",
    comment: "",
    indexes: [{
      name: "status_user",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_profile",
      unique: false,
      type: "BTREE",
      fields: ["id_profile"]
    }]
  };
  const UsersModel = sequelize.define("users_model", attributes, options);
  return UsersModel;
};