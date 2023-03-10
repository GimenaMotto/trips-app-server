const router = require('express').Router()
const { verifyToken } = require('../middlewares/verifyToken')
const Trip = require('./../models/Trip.model')


router.get('/getAllTrips', (req, res, next) => {

  Trip
    .find()
    .sort({ startDate: 1 })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.get('/getOneTrip/:trip_id', (req, res, next) => {

  const { trip_id } = req.params

  Trip
    .findById(trip_id)
    .populate('organizer travellers')
    .then(response => res.json(response))
    .catch(err => next(err))
})


router.post('/saveTrip', verifyToken, (req, res, next) => {

  const { title, description, startDate, endDate, images, budget, destination, travellers } = req.body
  const { _id: organizer } = req.payload

  Trip
    .create({ title, description, startDate, endDate, images, budget, destination, travellers, organizer })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.put('/editTrip/:trip_id', (req, res, next) => {

  const { trip_id } = req.params
  const { title, description, startDate, endDate, images, budget, destination } = req.body

  Trip
    .findByIdAndUpdate(trip_id, { ...req.body })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.put('/join/:trip_id', verifyToken, (req, res, next) => {

  const { trip_id } = req.params
  const { _id: traveller } = req.payload

  Trip
    .findByIdAndUpdate(trip_id, { $addToSet: { travellers: traveller } }, { new: true })
    .then(response => res.json(response))
    .catch(err => next(err))

})

router.put('/leave/:trip_id', verifyToken, (req, res, next) => {

  const { trip_id } = req.params
  const { _id: traveller } = req.payload

  Trip
    .findByIdAndUpdate(trip_id, { $pull: { travellers: traveller } }, { new: true })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.delete('/deleteTrip/:trip_id', (req, res, next) => {

  const { trip_id } = req.params

  Trip
    .findByIdAndDelete(trip_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router
