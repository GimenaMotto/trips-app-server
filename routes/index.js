const router = require('express').Router()

const tripsRoutes = require('./trips.routes')
router.use('/trips', tripsRoutes)

const authRoutes = require('./auth.routes')
router.use('/auth', authRoutes)

module.exports = router