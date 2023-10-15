const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_schedule: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_schedule"
    },
    id_adviser: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_adviser",
      references: {
        key: "id_adviser",
        model: "advisers_model"
      }
    },
    date_schedule: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_schedule"
    },
    event_schedule: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "event_schedule"
    },
    color_event: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "color_event"
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "create_date"
    }
  };
  const options = {
    tableName: "advisers_schedules",
    comment: "",
    indexes: [{
      name: "adviser_sche",
      unique: false,
      type: "BTREE",
      fields: ["id_adviser"]
    }, {
      name: "date_schedule",
      unique: false,
      type: "BTREE",
      fields: ["date_schedule"]
    }]
  };
  const AdvisersSchedulesModel = sequelize.define("advisers_schedules_model", attributes, options);
  return AdvisersSchedulesModel;
};