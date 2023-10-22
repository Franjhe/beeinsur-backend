const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_profile: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_profile"
    },
    profile_name: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "profile_name"
    }
  };
  const options = {
    tableName: "profiles",
    comment: "",
    indexes: []
  };
  const ProfilesModel = sequelize.define("profiles_model", attributes, options);
  return ProfilesModel;
};