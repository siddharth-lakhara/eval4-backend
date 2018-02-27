'use strict';
module.exports = (sequelize, DataTypes) => {
  var questions = sequelize.define('questions', {
    questn: DataTypes.TEXT,
    options: DataTypes.TEXT,
    questnid: DataTypes.INTEGER
  }, {});
  questions.associate = function(models) {
    // associations can be defined here
  };
  return questions;
};