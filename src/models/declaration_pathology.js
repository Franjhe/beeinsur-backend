const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_declaration_pathology: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_declaration_pathology"
    },
    name_declaration_pathology: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_declaration_pathology"
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
    tableName: "declaration_pathology",
    comment: "",
    indexes: [{
      name: "user_declaratio_pat",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "status_declaratio_pat",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }]
  };
  const DeclarationPathologyModel = sequelize.define("declaration_pathology_model", attributes, options);
  return DeclarationPathologyModel;
};