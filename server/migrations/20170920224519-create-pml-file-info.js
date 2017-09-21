'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PML_File_Infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pml_file_id: {
        type: Sequelize.STRING,
        allowNull:false
      },

      source_name : {
        type: Sequelize.STRING
      },

      age:{
        type: Sequelize.INTEGER,
      },

      gender:{
        type: Sequelize.STRING
      },
      smile_frequency:{
        type: Sequelize.INTEGER
      },

      attention_frequency:{
        type: Sequelize.INTEGER
      },

      head_positon:{
        type: Sequelize.ARRAY(Sequelize.DOUBLE)
      },

      head_rotation:{
        type: Sequelize.ARRAY(Sequelize.DOUBLE)
      },

      gaze_direction:{
        type: Sequelize.ARRAY(Sequelize.STRING)
      },

      action_unit_evidence:{
        type: Sequelize.ARRAY(Sequelize.DOUBLE)
      },

      action_unit_activation:{
        type: Sequelize.ARRAY(Sequelize.BOOLEAN)
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
    return queryInterface.dropTable('PML_File_Infos');
  }
};