'use strict';
module.exports = (sequelize, DataTypes) => {
  const SessionPML = sequelize.define('SessionPML',{
    session_id:{
      type : DataTypes.STRING,
      allowNull : false,
      //primaryKey : true
    },

    pml_file_ids:{
      type : DataTypes.ARRAY(DataTypes.STRING),
      allowNull : false,
    },

    pml_file_interval : {
      type : DataTypes.INTEGER,
      allowNull : false
    }
  });

  SessionPML.associate = (models) => {
    SessionPML.belongsTo(models.Sessions,{
      foreignKey:'session_id',
      onDelete : 'CASCADE'
    });
  }
  
  return SessionPML;
};