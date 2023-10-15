const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_push: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_push",
      references: {
        key: "id_push",
        model: "campaigns_push_model"
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
    tableName: "campaigns_push_lists",
    comment: "",
    indexes: [{
      name: "push_lista",
      unique: false,
      type: "BTREE",
      fields: ["id_push"]
    }, {
      name: "lista_push",
      unique: false,
      type: "BTREE",
      fields: ["id_list"]
    }, {
      name: "user_pushs",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const CampaignsPushListsModel = sequelize.define("campaigns_push_lists_model", attributes, options);
  return CampaignsPushListsModel;
};