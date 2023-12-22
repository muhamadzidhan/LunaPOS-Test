'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransaksiPenjualan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransaksiPenjualan.belongsTo(models.MasterProduct, {
        foreignKey: "itemLines"
      })
    }
  }
  TransaksiPenjualan.init({
    invoiceNo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Invoice No can not be null"
        },
        notEmpty: {
          msg: "Invoice No can not be empty"
        }
      }
    },
    invoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Invoice Date can not be null"
        },
        notEmpty: {
          msg: "Invoice Date can not be empty"
        }
      }
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Note can not be null"
        },
        notEmpty: {
          msg: "Note can not be empty"
        }
      }
    },
    itemLines: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Item Lines can not be null"
        },
        notEmpty: {
          msg: "Item Lines can not be empty"
        }
      }
    },
    totalBeforeTax: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Total Before Tax can not be null"
        },
        notEmpty: {
          msg: "Total Before Tax can not be empty"
        }
      }
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Total can not be null"
        },
        notEmpty: {
          msg: "Total can not be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'TransaksiPenjualan',
  });
  return TransaksiPenjualan;
};