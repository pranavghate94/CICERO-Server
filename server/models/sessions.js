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
    },

    hesitations : {
      type : DataTypes.INTEGER
    },

    transcript : {
      type : DataTypes.STRING
    }

  });

  //Add constraints for Sessions

  Sessions.associate = (models) =>{

    Sessions.belongsTo(models.Users,{
      foreignKey : 'user_id',
      onDelete : 'CASCADE'
    });

  }

  return Sessions;
};