const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
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
    id_subscriber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_subscriber",
      references: {
        key: "id_subscriber",
        model: "subscribers_model"
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
    tableName: "subscriber_lists",
    comment: "",
    indexes: [{
      name: "subscriber_lists",
      unique: false,
      type: "BTREE",
      fields: ["id_subscriber"]
    }, {
      name: "lists_subscriber",
      unique: false,
      type: "BTREE",
      fields: ["id_list"]
    }, {
      name: "user_subscriber_lists",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const SubscriberListsModel = sequelize.define("subscriber_lists_model", attributes, options);
  return SubscriberListsModel;
};