'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Video = sequelize.define('Video',{
    video_file_id : {
      type : DataTypes.STRING,
      allowNull : false,
      primaryKey : true
    },

    video_file_name : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },

    session_id : {
      type : DataTypes.STRING,
      unique : true
    }
  });

  //Add associations for video file

  Video.associate = (models) => {
      Video.hasOne(models.Sessions,{
        foreignKey : 'video_file_id'
      });

      Video.belongsTo(models.Sessions,{
        foreignKey : 'session_id',
        targetKey : 'session_id'
      });
  }

  return Video;
};