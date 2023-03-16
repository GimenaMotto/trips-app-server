const router = require('express').Router()
const User = require('./../models/User.model')

router.get('/getAllUsers', (req, res, next) => {

    User
        .find()
        .sort({ username: 1 })
        .select({ username: 1, avatar: 1, age: 1, gender: 1 })
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
        .findById(user_id)
        .then(user => {
            if (avatar === '') { avatar = user.avatar }
            User
                .findByIdAndUpdate(user_id, { avatar, description, role, interests, age, gender })
                .then(response => res.json(response))
        })
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