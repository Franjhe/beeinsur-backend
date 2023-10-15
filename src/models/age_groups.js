const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_group: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_group"
    },
    start_age: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "start_age"
    },
    end_age: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "end_age"
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
    tableName: "age_groups",
    comment: "",
    indexes: [{
      name: "status_age",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_age",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const AgeGroupsModel = sequelize.define("age_groups_model", attributes, options);
  return AgeGroupsModel;
};