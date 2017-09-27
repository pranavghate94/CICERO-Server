'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const MBUOutput = sequelize.create('MBUOutput',{
    mbu_output_id: {
      type: DataTypes.STRING,
      allowNull : false,
      primaryKey : true
    },
    pml_file_ids: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    session_id: {
      type: DataTypes.STRING
    },
    smiling_score: {
      type: DataTypes.INTEGER
    },
    frowning_score: {
      type: DataTypes.INTEGER
    },
    attention_score: {
      type: DataTypes.INTEGER
    },
    overall_score: {
      type: DataTypes.DOUBLE
    }
  });

  //Adding constraints

  return MBUOutput;
};