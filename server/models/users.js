'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users',{
    user_id : {
      type : DataTypes.STRING,
      primaryKey : true,
      allowNull : false
    },

    number_of_sessions : {
      type : DataTypes.STRING,
      allowNull : false
    }

  });

  //Add association with other tables for User

  Users.associate = (models) => {
    Users.hasOne(models.Sessions,{
      foreign_key : 'user_id'
    });
  }

  return Users;
};