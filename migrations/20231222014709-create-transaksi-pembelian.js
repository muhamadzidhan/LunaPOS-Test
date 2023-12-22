'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransaksiPembelians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoiceNo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      invoiceDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      note: {
        allowNull: false,
        type: Sequelize.STRING
      },
      itemLines: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "MasterProducts",
          key: "id"
        }
      },
      totalBeforeTax: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      total: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TransaksiPembelians');
  }
};