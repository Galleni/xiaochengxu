"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.addColumn("shops", "address", { type: Sequelize.STRING })
    ]),
  /*{
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
      },*/

  down: queryInterface =>
    Promise.all([queryInterface.removeColumn("shops", "address")])
  /*{
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
     },*/
};
