'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.removeConstraint("Sessions","Sessions_audio_file_id_fkey");

  },

  down: (queryInterface, Sequelize) => {
    
    
  }
};
