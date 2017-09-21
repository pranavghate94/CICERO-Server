'use strict';
module.exports = (sequelize, DataTypes) => {
  const MBU_Outputs = sequelize.define('MBU_Outputs', {
    mbu_output_id: {
      type : DataTypes.STRING,
      allowNull : false
    },
    pml_file_ids: {
      type : DataTypes.ARRAY(DataTypes.STRING)
    },
    session_id: {
      type : DataTypes.STRING
    },
    smiling_score: {
      type : DataTypes.DOUBLE
    },
    frowning_score: {
      type : DataTypes.DOUBLE
    },
    look_at_audience_score: {
      type : DataTypes.DOUBLE
    },
    overall_score: {
      type : DataTypes.DOUBLE
    }
  });
  return MBU_Outputs;
};