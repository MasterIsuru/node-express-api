'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Book',
        price: 100
      },
      {
        name: 'Pen',
        price: 20
      },
      {
        name: 'Ruler',
        price: 30
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
