const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_campaign: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_campaign",
      references: {
        key: "id_campaign",
        model: "campaigns_model"
      }
    },
    id_list: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_list",
      references: {
        key: "id_list",
        model: "lists_model"
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
    tableName: "campaign_lists",
    comment: "",
    indexes: [{
      name: "list_campaign",
      unique: false,
      type: "BTREE",
      fields: ["id_list"]
    }, {
      name: "lcampaign_ist",
      unique: false,
      type: "BTREE",
      fields: ["id_campaign"]
    }, {
      name: "user_campeingl",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const CampaignListsModel = sequelize.define("campaign_lists_model", attributes, options);
  return CampaignListsModel;
};