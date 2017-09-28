'use strict';
module.exports = (sequelize, DataTypes) => {
 
  const PML = sequelize.define('PML',{
    pml_file_id: {
      type: DataTypes.STRING,
      primaryKey : true,
      allowNull : false
    },
    source_name: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.STRING
    },
    smile_frequency: {
      type: DataTypes.DOUBLE
    },
    attention_frequency: {
      type: DataTypes.DOUBLE
    },
    head_position: {
      type: DataTypes.ARRAY(DataTypes.DOUBLE)
    },
    head_rotation: {
      type: DataTypes.ARRAY(DataTypes.DOUBLE)
    },
    gaze_direction: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    action_unit_evidence: {
      type: DataTypes.ARRAY(DataTypes.DOUBLE)
    },
    action_unit_activation: {
      type: DataTypes.ARRAY(DataTypes.BOOLEAN)
    }
  });

  return PML;
};