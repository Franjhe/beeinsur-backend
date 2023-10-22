const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_contract: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_contract"
    },
    name_contract: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_contract"
    },
    description_contract: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description_contract"
    },
    id_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
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
    tableName: "contracts",
    comment: "",
    indexes: [{
      name: "status_contratc",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "user_contratc",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }]
  };
  const ContractsModel = sequelize.define("contracts_model", attributes, options);
  return ContractsModel;
};