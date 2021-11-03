const express = require("express")

const server = express()

server.use(express.json());

const carsRouter = require('./cars/cars-router');
// DO YOUR MAGIC

server.use('/api/cars', carsRouter);
module.exports = server
