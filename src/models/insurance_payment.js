const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_payment: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_payment"
    },
    id_buy: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_buy",
      references: {
        key: "id_buy",
        model: "insurance_buy_model"
      }
    },
    id_transaction: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_transaction",
      references: {
        key: "id_transaction",
        model: "payment_transactions_model"
      }
    },
    id_term: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_term",
      references: {
        key: "id_term",
        model: "insurance_terms_model"
      }
    },
    amount_term: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "amount_term"
    },
    id_coupon: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_coupon",
      references: {
        key: "id_coupon",
        model: "insurance_coupons_model"
      }
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
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "amount_coupon"
    },
    sub_total_payment: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sub_total_payment"
    },
    total_payment: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "total_payment"
    },
    total_payment_bs: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "total_payment_bs"
    },
    id_smoker_tax: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_smoker_tax"
    },
    amount_tax: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "amount_tax"
    },
    discount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "discount"
    },
    date_payment: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_payment"
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
    tableName: "insurance_payment",
    comment: "",
    indexes: [{
      name: "buy_payment",
      unique: false,
      type: "BTREE",
      fields: ["id_buy"]
    }, {
      name: "term_payment",
      unique: false,
      type: "BTREE",
      fields: ["id_term"]
    }, {
      name: "cupon_payment",
      unique: false,
      type: "BTREE",
      fields: ["id_coupon"]
    }, {
      name: "transacion_payment",
      unique: false,
      type: "BTREE",
      fields: ["id_transaction"]
    }]
  };
  const InsurancePaymentModel = sequelize.define("insurance_payment_model", attributes, options);
  return InsurancePaymentModel;
};