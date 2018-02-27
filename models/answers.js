'use strict';
module.exports = (sequelize, DataTypes) => {
  var answers = sequelize.define('answers', {
    questnid: DataTypes.INTEGER,
    answer: DataTypes.STRING
  }, {});
  answers.associate = function(models) {
    // associations can be defined here
  };
  return answers;
};