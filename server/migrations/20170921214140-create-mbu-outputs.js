'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MBU_Outputs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mbu_output_id: {
        type: Sequelize.STRING
      },
      pml_file_ids: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      session_id: {
        type: Sequelize.STRING
      },
      smiling_score: {
        type: Sequelize.DOUBLE
      },
      frowning_score: {
        type: Sequelize.DOUBLE
      },
      look_at_audience_score: {
        type: Sequelize.DOUBLE
      },
      overall_score: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MBU_Outputs');
  }
};