'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Audio = sequelize.define('Audio',{
    audio_file_id:{
      type : DataTypes.STRING,
      allowNull : false,
      primaryKey : true
    }
  });

  //Add associations for Audio table

  return Audio;
};