const router = require('express').Router()
const User = require('./../models/User.model')

router.get('/getAllUsers', (req, res, next) => {

    User
        .find({ role: 'USER' })
        .sort({ createdAt: 1 })
        .select({ username: 1, avatar: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/getOneUser/:user_id', (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put('/editUser/:user_id', (req, res, next) => {

    const { user_id } = req.params
    const { avatar, description, role, interests, age, gender } = req.body

    User
        .findByIdAndUpdate(user_id, { ...req.body })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete('/deleteUser/:user_id', (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})
module.exports = router