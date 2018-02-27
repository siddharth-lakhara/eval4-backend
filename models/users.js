'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    userid: DataTypes.INTEGER,
    username: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};