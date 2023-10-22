const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_faq: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_faq"
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "question"
    },
    reply: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "reply"
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
    language: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "language"
    }
  };
  const options = {
    tableName: "faqs",
    comment: "",
    indexes: [{
      name: "FK_Status_faqs",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }]
  };
  const FaqsModel = sequelize.define("faqs_model", attributes, options);
  return FaqsModel;
};