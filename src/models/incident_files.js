const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_file_incident: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_file_incident"
    },
    id_incident: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_incident",
      references: {
        key: "id_incident",
        model: "incident_service_model"
      }
    },
    name_file: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_file"
    },
    extension_file: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "extension_file"
    }
  };
  const options = {
    tableName: "incident_files",
    comment: "",
    indexes: [{
      name: "incident_file",
      unique: false,
      type: "BTREE",
      fields: ["id_incident"]
    }]
  };
  const IncidentFilesModel = sequelize.define("incident_files_model", attributes, options);
  return IncidentFilesModel;
};