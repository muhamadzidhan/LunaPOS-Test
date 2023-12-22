'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require("../helpers/bcrypt")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Fullname can not be null"
        },
        notEmpty: {
          msg: "Fullname can not be empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique : true,
      validate: {
        notNull: {
          msg: "Email can not be null"
        },
        notEmpty: {
          msg: "Email can not be empty"
        },
        isEmail: {
          msg: "Please enter a valid email address"
        },
        // unique: {
        //   msg: "Email address already in use!"
        // }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password can not be null"
        },
        notEmpty: {
          msg: "Password can not be empty"
        },
        len: {
          args: [5],
          msg: "Password must be at least 5 characters long"
        }
      }
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Company Name can not be null"
        },
        notEmpty: {
          msg: "Company Name can not be empty"
        },
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, option) => {
    user.password = hashPassword(user.password)
  })
  return User;
};