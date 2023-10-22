const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_file: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_file"
    },
    id_agency: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_agency"
    },
    id_adviser: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_adviser"
    },
    type_file: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "type_file"
    },
    name_file: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_file"
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "11",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_status"
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
    tableName: "files",
    comment: "",
    indexes: []
  };
  const FilesModel = sequelize.define("files_model", attributes, options);
  return FilesModel;
};