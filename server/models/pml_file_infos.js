'use strict';
module.exports = (sequelize, DataTypes) => {

  const PML_File_Infos = sequelize.define('PML_File_Info',{
    pml_file_id : {
      type: DataTypes.STRING,
      allowNull : false
    },

    source_name : {
      type: DataTypes.STRING
    },

    age : {
      type: DataTypes.INTEGER
    },

    gender : {
      type: DataTypes.STRING
    },

    smile_frequency : {
      type: DataTypes.INTEGER
    },

    attention_frequency : {
      type: DataTypes.INTEGER
    },

    head_position : {
      type: DataTypes.ARRAY(DataTypes.DOUBLE),
      //allowNull : false
    },

    head_rotation : {
      type: DataTypes.ARRAY(DataTypes.DOUBLE),
      //allowNull : false
    },

    gaze_direction : {
      type: DataTypes.ARRAY(DataTypes.STRING),
      //allowNull : false
    },

    action_unit_evidence : {
      type: DataTypes.ARRAY(DataTypes.DOUBLE),
      allowNull : false
    },

    action_unit_activation : {
      type: DataTypes.ARRAY(DataTypes.BOOLEAN),
      //allowNull : false
    }

  });

  

  return PML_File_Info;
};