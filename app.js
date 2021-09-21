const express = require('express');
const {sequelize} = require('./db');
const {Robot} = require('./models/robot');
const {Warehouse} = require('./models/warehouse');
const {Assigned} = require('./models/assigned');
const index = require('./models/index');
const seed = require('./seed')

const PORT = process.env.PORT || 3000;

const app = express();


// serve static assets from the public/ folder
app.use(express.static('public'));

//Allow CORS requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

index();
seed();

app.get('/robots', async (req, res) => {
    const robots= await Robot.findAll()
    res.json({robots})
})
app.get('/warehouses', async (req, res) => {
    const warehouses= await Warehouse.findAll()
    res.json({warehouses})
})
app.get('/assigneds', async (req, res) => {
    const assigneds= await Assigned.findAll()
    res.json({assigneds})
})

app.get('/robots/:id', async (req, res) => {
    const robot = await Robot.findByPk(req.params.id)
    res.json({robot})
})

app.listen(PORT, () => {
    sequelize.sync({force: true});
    console.log(`Your server is running on http://localhost:${PORT}`);
})