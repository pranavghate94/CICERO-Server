"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Videos", "session_id", Sequelize.STRING)
      .then(
        queryInterface.addConstraint("Videos", ["session_id"], {
          type: "FOREIGN KEY",
          references: {
            table: "Sessions",
            field: "session_id"
          },
          onUpdate: "cascade"
        })
      )
      .catch(err => {
        console.log("Migration Error in Video:" + err);
      });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Videos","session_id")
    .catch(err=>{
      console.log("Error in dropping Column: " + err);
    });
  }
};
