const express = require('express');
const router = express.Router();

const Cars = require('./cars-model')
const md = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll()
        res.status(200).json(cars)
    } catch(err){
        next(err)
    }
})

router.get('/:id', md.checkCarId, async (req, res, next) => {
    try {
        const car = await Cars.getById(req.params.id)
        res.status(200).json(car)
    } catch(err) {
        next(err)
    }
})

// router.post('/', (req, res) => {
//     console.log('posting new car')
// }) 

router.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
    next()
})

module.exports = router;