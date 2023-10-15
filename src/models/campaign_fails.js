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
    id_subscriber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_subscriber"
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
    tableName: "campaign_fails",
    comment: "",
    indexes: [{
      name: "fail_campeing",
      unique: false,
      type: "BTREE",
      fields: ["id_campaign"]
    }, {
      name: "fail_suscriber",
      unique: false,
      type: "BTREE",
      fields: ["id_list"]
    }]
  };
  const CampaignFailsModel = sequelize.define("campaign_fails_model", attributes, options);
  return CampaignFailsModel;
};