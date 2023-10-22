const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_push: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_push"
    },
    name_push: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_push"
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "start_date"
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "end_date"
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
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_user",
      // references: {
      //   key: "id_user",
      //   model: "users_model"
      // }
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
    tableName: "campaigns_push",
    comment: "",
    indexes: [{
      name: "status_push",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_push",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "start_date",
      unique: false,
      type: "BTREE",
      fields: ["start_date"]
    }, {
      name: "end_date",
      unique: false,
      type: "BTREE",
      fields: ["end_date"]
    }]
  };
  const CampaignsPushModel = sequelize.define("campaigns_push_model", attributes, options);
  return CampaignsPushModel;
};