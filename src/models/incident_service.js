const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_incident: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_incident"
    },
    id_event: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_event",
      references: {
        key: "id_event",
        model: "events_model"
      }
    },
    option_identification: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "option_identification"
    },
    n_identification: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "n_identification"
    },
    date_incident: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_incident"
    },
    description_incident: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description_incident"
    },
    names_user: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "names_user"
    },
    surnames_user: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "surnames_user"
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
    phone_user: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "phone_user"
    },
    identification_user: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "identification_user"
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
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
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "create_date"
    },
    modify_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "modify_date"
    }
  };
  const options = {
    tableName: "incident_service",
    comment: "",
    indexes: [{
      name: "event_incident",
      unique: false,
      type: "BTREE",
      fields: ["id_event"]
    }, {
      name: "status_incident",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_incident",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const IncidentServiceModel = sequelize.define("incident_service_model", attributes, options);
  return IncidentServiceModel;
};