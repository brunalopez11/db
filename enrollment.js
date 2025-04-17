const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./user');
const Class = require('./class');

const Enrollment = sequelize.define('Enrollment', {
  dataMatricula: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Relacionamentos
User.hasMany(Enrollment);
Enrollment.belongsTo(User);

Class.hasMany(Enrollment);
Enrollment.belongsTo(Class);

module.exports = Enrollment;
