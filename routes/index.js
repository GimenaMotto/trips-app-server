const router = require('express').Router()

const tripsRoutes = require('./trips.routes')
router.use('/trips', tripsRoutes)

const authRoutes = require('./auth.routes')
router.use('/auth', authRoutes)

const usersRoutes = require('./users.routes')
router.use('/users', usersRoutes)

const uploadRouter = require('./upload.routes')
router.use('/upload', uploadRouter)

module.exports = router





