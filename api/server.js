const express = require("express")
const server = express()

const carRoutes = require('./cars/cars-router')

server.use('/api/cars', carRoutes)

module.exports = server
