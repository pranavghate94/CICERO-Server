'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sessions = sequelize.define('Sessions',{
    session_id : {
      type : DataTypes.STRING,
      allowNull : false,
      primaryKey : true
    },

    user_id : {
      type : DataTypes.STRING,
      allowNull : false
    },

    start_time : {
      type : DataTypes.DATE,
      allowNull : false
    },

    end_time : {
      type : DataTypes.DATE,
      allowNull : false
    },

    duration :{
      type : DataTypes.INTEGER,
      allowNull : false
    },

    video_file_id : {
      type : DataTypes.STRING,
      allowNull : false
    },

    audio_file_id : {
      type : DataTypes.STRING,
      allowNull : false
    }

  });

  //Add constraints for Sessions

  Session.associate = (models) =>{
    Session.hasOne(models.SessionPML,{
      foreignKey:'session_id',   
    });

    Session.belongsTo(models.Users,{
      foreignKey : 'user_id',
      onDelete : 'CASCADE'
    });

    Sessions.belongsTo(models.Audio,{
      foreignKey : 'audio_file_id',
      onDelete : 'CASCADE'
    });

    Session.belongsTo(models.Video,{
      foreignKey : 'video_file_id',
      onDelete: 'CASCADE'
    });
  }

  return Sessions;
};