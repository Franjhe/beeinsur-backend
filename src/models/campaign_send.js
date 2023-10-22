const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_campaign: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_campaign",
      // references: {
      //   key: "id_campaign",
      //   model: "campaigns_model"
      // }
    },
    id_subscriber: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_subscriber"
    },
    id_list: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_list",
      // references: {
      //   key: "id_list",
      //   model: "lists_model"
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
    tableName: "campaign_send",
    comment: "",
    indexes: [{
      name: "send_campaing",
      unique: false,
      type: "BTREE",
      fields: ["id_campaign"]
    }, {
      name: "send_list",
      unique: false,
      type: "BTREE",
      fields: ["id_list"]
    }, {
      name: "suscribers_list",
      unique: false,
      type: "BTREE",
      fields: ["id_subscriber"]
    }]
  };
  const CampaignSendModel = sequelize.define("campaign_send_model", attributes, options);
  return CampaignSendModel;
};