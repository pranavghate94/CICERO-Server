'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MBUOutputs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        //primaryKey: true,
        type: Sequelize.INTEGER
      },
      mbu_output_id: {
        type: Sequelize.STRING,
        allowNull : false,
        primaryKey : true
      },
      pml_file_ids: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      session_id: {
        type: Sequelize.STRING
      },
      smiling_score: {
        type: Sequelize.INTEGER
      },
      frowning_score: {
        type: Sequelize.INTEGER
      },
      attention_score: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('MBUOutputs');
  }
};