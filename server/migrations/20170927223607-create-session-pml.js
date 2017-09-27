'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SessionPMLs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        //primaryKey: true,
        type: Sequelize.INTEGER
      },
      session_id: {
        type: Sequelize.STRING,
        allowNull : false,
        onDelete : 'CASCADE',
        references : {
          model : 'Sessions',
          key : 'session_id',
          as : 'session_id'
        }
      },
      pml_file_ids: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      pml_file_interval: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('SessionPMLs');
  }
};