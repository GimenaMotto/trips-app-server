const router = require('express').Router()

const tripsRoutes = require('./trips.routes')
router.use('/trips', tripsRoutes)

module.exports = router