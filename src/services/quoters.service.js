const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_quoter: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_quoter"
    },
    id_insurance: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_insurance",
      references: {
        key: "id_insurance",
        model: "insurances_model"
      }
    },
    name_user: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_user"
    },
    last_name_user: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "last_name_user"
    },
    email_user: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email_user"
    },
    date_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_birth"
    },
    id_country: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_country"
    },
    smoker: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "smoker"
    },
    id_adviser: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_adviser",
      references: {
        key: "id_adviser",
        model: "advisers_model"
      }
    },
    id_agency: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_agency",
      references: {
        key: "id_agency",
        model: "agencies_model"
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
    tableName: "quoters",
    comment: "",
    indexes: [{
      name: "prduc_quoter",
      unique: false,
      type: "BTREE",
      fields: ["id_insurance"]
    }, {
      name: "adviser_quoter",
      unique: false,
      type: "BTREE",
      fields: ["id_adviser"]
    }, {
      name: "agency_quoter",
      unique: false,
      type: "BTREE",
      fields: ["id_agency"]
    }]
  };
  const QuotersModel = sequelize.define("quoters_model", attributes, options);
  return QuotersModel;
};