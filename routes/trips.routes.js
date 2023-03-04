const router = require('express').Router()
const Trip = require('./../models/Trip.model')

router.get('/getAllTrips', (req, res, next) => {

  Trip
    .find()
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getOneTrip/:trip_id', (req, res, next) => {
  const { trip_id } = req.params

  Trip
    .findById(trip_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})



router.post('/saveTrip', (req, res, next) => {

  const { title, description, startDate, endDate, images, budget, destination, participants } = req.body

  Trip
    .create({ title, description, startDate, endDate, images, budget, destination, participants })
    // .create({ ...req.body, organizer: req.payload._id })
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router
