const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_status"
    },
    status_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status_name"
    },
    status_color: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status_color"
    }
  };
  const options = {
    tableName: "status",
    comment: "",
    indexes: []
  };
  const StatusModel = sequelize.define("status_model", attributes, options);
  return StatusModel;
};