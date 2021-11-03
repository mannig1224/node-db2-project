// DO YOUR MAGIC
const router = require('express').Router()

const Car = require('./cars-model');

const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware');


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

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
    Car.create(req.body)
        .then(car => {
            res.status(201).json(car)
        })
        .catch(next);
    
})
router.use((err, req, res, next) => { // eslint-disable-line
    // DO YOUR MAGIC
    res.status(err.status || 500).json({
      custom: 'something went wrong',
      message: err.message
    })
  })
module.exports = router;
