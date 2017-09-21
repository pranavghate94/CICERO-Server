'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session_PML = sequelize.define('Session_PML', {
    session_id: {
      type : DataTypes.STRING,
      allowNull : false
    },

    pml_file_ids : {
      type : DataTypes.ARRAY(DataTypes.STRING)
    },

    array_time_interval : {
      type : DataTypes.INTEGER
    },

    video_file : {
      type : DataTypes.STRING
    }
  });
  return Session_PML;
};