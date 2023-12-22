'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = require("../db.json").Tax
    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Taxes',data);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Taxes', null, {});
  }
};
