const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_fee: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_fee"
    },
    name_fee: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_fee"
    },
    description_fee: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description_fee"
    },
    number_fee: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "number_fee"
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
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
    tableName: "fees",
    comment: "",
    indexes: [{
      name: "status_fee",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_fee",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const FeesModel = sequelize.define("fees_model", attributes, options);
  return FeesModel;
};