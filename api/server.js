const express = require("express")
const server = express()

const carRoutes = require('./cars/cars-router')

server.use(express.json())
server.use('/api/cars', carRoutes)


server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
    next()
})

module.exports = server
