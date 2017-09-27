'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Video = sequelize.define('Video',{
    video_id : {
      type : DataTypes.STRING,
      allowNull : false,
      primaryKey : true
    },

    video_file_path : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    }
  });

  //Add associations for video file

  return Video;
};