const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_price_age_group: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_price_age_group"
    },
    id_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_price",
      references: {
        key: "id_price",
        model: "insurance_prices_model"
      }
    },
    id_group: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_group",
      references: {
        key: "id_group",
        model: "age_groups_model"
      }
    },
    points: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "points"
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
    tableName: "price_age_groups",
    comment: "",
    indexes: [{
      name: "price_age_group",
      unique: false,
      type: "BTREE",
      fields: ["id_price"]
    }, {
      name: "user_age_group",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "status_age_group",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "group_price",
      unique: false,
      type: "BTREE",
      fields: ["id_group"]
    }]
  };
  const PriceAgeGroupsModel = sequelize.define("price_age_groups_model", attributes, options);
  return PriceAgeGroupsModel;
};