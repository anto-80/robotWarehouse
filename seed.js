const path = require('path');
const fs = require('fs').promises;
const index = require('./models/index');
const {sequelize} = require('./db');
const {Robot} = require('./models/robot');
const {Assigned} = require('./models/assigned');
const {Warehouse} = require('./models/warehouse');

const seed = async () => {
    await index();
    await sequelize.sync({ force: true });

    const seedPath = path.join(__dirname, 'robots.json'); // creates path to seed data
    const buffer = await fs.readFile(seedPath); // reads json
    const robots = JSON.parse(String(buffer)); //parses data

    for (const robotData of robots) {
        const robot = await Robot.create(robotData);
        for (const assignedData of robotData.assigneds) {
            const assigned = await Assigned.create(assignedData);
            await robot.addAssigned(assigned);
            console.log("popped");
        }
    }

    const seedPath2 = path.join(__dirname, 'warehouses.json'); // creates path to seed data
    const buffer2 = await fs.readFile(seedPath2); // reads json
    const warehouses = JSON.parse(String(buffer2)); //parses data

    for (const warehouseData of warehouses) {
        const warehouse = await Warehouse.create(warehouseData);
        for (const assignedData of warehouseData.assigneds) {
            const assigned = await Assigned.create(assignedData);
            await warehouse.addAssigned(assigned);
            console.log("popped2");
        }
    }
}


module.exports = seed