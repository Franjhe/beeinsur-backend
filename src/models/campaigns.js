const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_campaign: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_campaign"
    },
    name_campaign: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_campaign"
    },
    subject_campaign: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "subject_campaign"
    },
    send_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "send_date"
    },
    description_campaign: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description_campaign"
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_status",
      references: {
        key: "id_status",
        model: "status_model"
      }
    },
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    tableName: "campaigns",
    comment: "",
    indexes: [{
      name: "send_date",
      unique: false,
      type: "BTREE",
      fields: ["send_date"]
    }, {
      name: "status_campaign",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_campaign",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const CampaignsModel = sequelize.define("campaigns_model", attributes, options);
  return CampaignsModel;
};