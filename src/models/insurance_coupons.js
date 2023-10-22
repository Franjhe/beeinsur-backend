const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_coupon: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_coupon"
    },
    id_insurance: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_insurance",
      // references: {
      //   key: "id_insurance",
      //   model: "insurances_model"
      // }
    },
    name_coupon: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name_coupon"
    },
    code_coupon: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "code_coupon"
    },
    type_coupon: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "type_coupon"
    },
    amount_coupon: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "amount_coupon"
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
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "start_date"
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "end_date"
    }
  };
  const options = {
    tableName: "insurance_coupons",
    comment: "",
    indexes: [{
      name: "user_coupon",
      unique: false,
      type: "BTREE",
      fields: ["id_user"]
    }, {
      name: "status_coupon",
      unique: false,
      type: "BTREE",
      fields: ["id_status"]
    }, {
      name: "form_coupon",
      unique: false,
      type: "BTREE",
      fields: ["id_insurance"]
    }]
  };
  const InsuranceCouponsModel = sequelize.define("insurance_coupons_model", attributes, options);
  return InsuranceCouponsModel;
};