'use strict';
module.exports = (sequelize, DataTypes) => {
  const About = sequelize.define('About', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  About.associate = function(models) {
    // associations can be defined here
  };
  return About;
};