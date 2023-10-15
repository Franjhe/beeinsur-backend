const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_fail: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_fail"
    },
    id_detail: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_detail",
      references: {
        key: "id_detail",
        model: "campaigns_push_details_model"
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
    date_send: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_send"
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
    tableName: "campaigns_push_fails",
    comment: "",
    indexes: [{
      name: "push_send_push",
      unique: false,
      type: "BTREE",
      fields: ["id_detail"]
    }, {
      name: "suscriptor_send_push",
      unique: false,
      type: "BTREE",
      fields: ["id_subscriber"]
    }, {
      name: "lista_send_push",
      unique: false,
      type: "BTREE",
      fields: ["id_list"]
    }, {
      name: "user_send_push",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "date_send",
      unique: false,
      type: "BTREE",
      fields: ["date_send"]
    }]
  };
  const CampaignsPushFailsModel = sequelize.define("campaigns_push_fails_model", attributes, options);
  return CampaignsPushFailsModel;
};