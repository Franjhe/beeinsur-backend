const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_session: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_session"
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
    token_session: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "token_session"
    },
    sesion_token: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sesion_token"
    },
    date_sesion: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_sesion"
    },
    id_agency: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_agency",
      // references: {
      //   key: "id_agency",
      //   model: "agencies_model"
      // }
    }
  };
  const options = {
    tableName: "session_data",
    comment: "",
    indexes: [{
      name: "session_agency",
      unique: false,
      type: "BTREE",
      fields: ["id_agency"]
    }]
  };
  const SessionDataModel = sequelize.define("session_data_model", attributes, options);
  return SessionDataModel;
};