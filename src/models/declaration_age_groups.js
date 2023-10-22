const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_setting: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_setting"
    },
    id_declaration_health: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_declaration_health",
      // references: {
      //   key: "id_declaration_health",
      //   model: "declaration_health_model"
      // }
    },
    id_group: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_group",
      // references: {
      //   key: "id_group",
      //   model: "age_groups_model"
      // }
    },
    points: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "points"
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "1",
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
    tableName: "declaration_age_groups",
    comment: "",
    indexes: [{
      name: "delcaration_setting",
      unique: false,
      type: "BTREE",
      fields: ["id_declaration_health"]
    }, {
      name: "user_delcaration_setting",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "status_delcaration_setting",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "group_declaration",
      unique: false,
      type: "BTREE",
      fields: ["id_group"]
    }]
  };
  const DeclarationAgeGroupsModel = sequelize.define("declaration_age_groups_model", attributes, options);
  return DeclarationAgeGroupsModel;
};