const {sequelize} = require('../db')
const {Robot} = require('./robot');
const {Warehouse} = require('./warehouse');
const {Assigned} = require('./assigned');


async function index() {

  //creating Association between models
 Assigned.belongsTo(Warehouse);
 Warehouse.hasMany(Assigned);
 Assigned.belongsTo(Robot);
 Robot.hasMany(Assigned);


}
 
 module.exports = index;