'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        //primaryKey: true,
        type: Sequelize.INTEGER
      },
      session_id: {
        type: Sequelize.STRING,
        primaryKey : true,
        allowNull : false
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull : false,
        references : {
          model : 'Users',
          key : 'user_id',
          as : 'user_id'
        }
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      },

      audio_file_id : {
        type: Sequelize.STRING,
        allowNull : false,
        references : {
          model : 'Audio',
          key : 'audio_file_id',
          as : 'audio_file_id'
        }
        
      },

      video_file_id : {
        type : Sequelize.STRING,
        allowNull : false,
        references : {
          model : 'Video',
          key : 'video_file_id',
          as : 'video_file_id'
        }
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
    return queryInterface.dropTable('Sessions');
  }
};