'use strict';

//import Session_PML from './session_pml';

module.exports = (sequelize, DataTypes) => {
  var Sessions = sequelize.define('Sessions', {
    user_id:{
      type : DataTypes.STRING,
      allowNull : false
    },
    session_id: {
      type : DataTypes.STRING,
      allowNull : false
    },
    start_time: {
      type : DataTypes.DATE
    },
    end_time: {
      type : DataTypes.DATE
    },
    duration: {
      type : DataTypes.INTEGER
    }
  });

  //Session.belongsTo(Session_PML);

  return Sessions;
};