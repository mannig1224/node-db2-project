const Car = require('./cars-model');
const vinValidator = require('vin-validator');


const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  Car.getById(req.params.id)
    .then(possibleAccount => {
      if(possibleAccount) {
        req.specifiedCar = possibleAccount
        next()
      } else {
        next({ status: 404, message: 'account not found'})
      }
    })
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const error = { status: 400};
  const {vin, make, model, mileage} = req.body;
  if (vin === undefined){
    error.message = 'vin is missing';
  } else if (make === undefined){
    error.message = 'make is missing';
  } else if (model === undefined){
    error.message = 'model is missing';
  } else if (mileage === undefined){
    error.message = 'mileage is missing';
  } 

  if (error.message) {
    next(error)
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const isValidVin = vinValidator.validate(req.body.vin);
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload
}