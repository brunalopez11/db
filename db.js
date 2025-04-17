// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('escola', 'root', 'Bruna@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
