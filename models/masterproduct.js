'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MasterProduct.belongsTo(models.Tax, {
        foreignKey: "taxId"
      })
      MasterProduct.hasMany(models.TransaksiPembelian, {
        foreignKey: "itemLines"
      })
      MasterProduct.hasMany(models.TransaksiPenjualan, {
        foreignKey: "itemLines"
      })
    }
  }
  MasterProduct.init({
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Sku can not be null"
        },
        notEmpty: {
          msg: "Sku can not be empty"
        }
      }
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Item Name can not be null"
        },
        notEmpty: {
          msg: "Item Name can not be empty"
        },
      }
    },
    uom: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "UOM can not be null"
        },
        notEmpty: {
          msg: "UOM can not be empty"
        },
        isIn: {
          args: [['PCS', 'KG', 'HARI', 'JAM']],
          msg: "Invalid input UOM"
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Category can not be null"
        },
        notEmpty: {
          msg: "Category can not be empty"
        },
        isIn: {
          args: [['Minuman', 'Makanan', 'Kopi']],
          msg: "Invalid input Category"
        }
      }
    },
    itemCost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Item Cost can not be null"
        },
        notEmpty: {
          msg: "Item Cost can not be empty"
        }
      }
    },
    itemPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Item Price can not be null"
        },
        notEmpty: {
          msg: "Item Price can not be empty"
        }
      }
    },
    taxId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "TaxId Can not be null"
        },
        notEmpty: {
          msg: "TaxId Can not be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'MasterProduct',
  });
  return MasterProduct;
};