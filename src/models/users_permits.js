const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_permit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_permit"
    },
    id_profile: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_profile",
      references: {
        key: "id_profile",
        model: "profiles_model"
      }
    },
    name_module: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_module"
    },
    name_core: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_core"
    }
  };
  const options = {
    tableName: "users_permits",
    comment: "",
    indexes: [{
      name: "profile_permits",
      unique: false,
      type: "BTREE",
      fields: ["id_profile"]
    }]
  };
  const UsersPermitsModel = sequelize.define("users_permits_model", attributes, options);
  return UsersPermitsModel;
};