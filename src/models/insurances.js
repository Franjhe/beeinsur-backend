const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_insurance: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_insurance"
    },
    name_insurance: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_insurance"
    },
    title_pdf: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "title_pdf"
    },
    description_insurance: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description_insurance"
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
    },
    option_extension: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "2",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "option_extension"
    },
    extension_husbands: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "extension_husbands"
    },
    extension_sons: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "extension_sons"
    },
    extension_fathers: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "extension_fathers"
    },
    extension_spouse: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "extension_spouse"
    },
    approval_number: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "approval_number"
    },
    beneficiaries: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "beneficiaries"
    }
  };
  const options = {
    tableName: "insurances",
    comment: "",
    indexes: [{
      name: "user_form",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "status_form",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }]
  };
  const InsurancesModel = sequelize.define("insurances_model", attributes, options);
  return InsurancesModel;
};