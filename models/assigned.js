const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')



class Assigned extends Model {}

Assigned.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    
}, {
    sequelize,
    timestamps: false,
});

module.exports = { Assigned};