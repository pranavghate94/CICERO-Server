'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Audio = sequelize.define('Audio',{
    audio_file_id:{
      type : DataTypes.STRING,
      allowNull : false,
      primaryKey : true
    },

    number_of_hesitations : {
      type : DataTypes.INTEGER,
      allowNull : true,
    },

    transcript : {
      type : DataTypes.STRING
    }
  });

  //Add associations for Audio table
  Audio.associate = (models) => {
    Audio.hasOne(models.Sessions,{
      foreignKey : 'audio_file_id'
    });
  }

  return Audio;
};