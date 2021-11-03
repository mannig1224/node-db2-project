// DO YOUR MAGIC
const router = require('express').Router()

const Car = require('./cars-model');

const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware');
const { restart } = require('nodemon');

router.get('/', async (req, res, next) => {
    try {
        const car = await Car.getAll();
        res.json(car);
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, (req, res, next) => {
    res.status(200).json(req.specifiedCar);
})

router.post('/', checkCarPayload, (req, res, next) => {
    Car.create(req.body)
        .then(car => {
            res.status(201).json(car)
        })
        .catch(next);
    
})

module.exports = router;
