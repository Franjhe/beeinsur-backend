const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_session: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_session"
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "token"
    },
    token_session: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "token_session"
    },
    sesion_token: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sesion_token"
    },
    date_sesion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_sesion"
    },
    id_adviser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_adviser"
    }
  };
  const options = {
    tableName: "session_data_adviser",
    comment: "",
    indexes: []
  };
  const SessionDataAdviserModel = sequelize.define("session_data_adviser_model", attributes, options);
  return SessionDataAdviserModel;
};