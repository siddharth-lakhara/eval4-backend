'use strict';
module.exports = (sequelize, DataTypes) => {
  var responses = sequelize.define('responses', {
    username: DataTypes.STRING,
    response: DataTypes.TEXT
  }, {});
  responses.associate = function(models) {
    // associations can be defined here
  };
  return responses;
};