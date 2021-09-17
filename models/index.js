const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')


class Robot extends Model {}

Robot.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {Robot};