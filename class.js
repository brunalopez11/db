const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Class = sequelize.define('Class', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  turno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sala: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Class;
