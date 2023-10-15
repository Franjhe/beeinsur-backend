const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_detail: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_detail"
    },
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
    subject_push: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "subject_push"
    },
    type_push: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "type_push"
    },
    period_days: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "period_days"
    },
    description_push: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description_push"
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
    tableName: "campaigns_push_details",
    comment: "",
    indexes: [{
      name: "push_detalle",
      unique: false,
      type: "BTREE",
      fields: ["id_push"]
    }, {
      name: "status_push_detalle",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_push_detalle",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "subject_push",
      unique: false,
      type: "BTREE",
      fields: ["subject_push"]
    }]
  };
  const CampaignsPushDetailsModel = sequelize.define("campaigns_push_details_model", attributes, options);
  return CampaignsPushDetailsModel;
};