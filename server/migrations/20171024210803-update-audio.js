"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Audios", "number_of_hesitations", Sequelize.INTEGER)
      .then(
        queryInterface
          .addColumn("Audios", "transcript", Sequelize.STRING)
          .catch(error => {
            console.log("Error Thrown in Migration: " + error);
          })
      )
      .catch(error => {
        console.log("Error Thrown in Migration: " + error);
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
