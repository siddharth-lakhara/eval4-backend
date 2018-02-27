'use strict';
module.exports = (sequelize, DataTypes) => {
  var leaders = sequelize.define('leaders', {
    userid: DataTypes.INTEGER,
    username: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  leaders.associate = function(models) {
    // associations can be defined here
  };
  return leaders;
};