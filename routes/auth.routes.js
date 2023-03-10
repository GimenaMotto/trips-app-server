const router = require("express").Router()
const User = require("../models/User.model")
const { verifyToken } = require("../middlewares/verifyToken")

router.post('/signup', (req, res, next) => {

    const { email, password, username, description, avatar, interests, role, gender, age } = req.body

    User
        .create({ email, password, username, avatar, description, interests, role, gender, age })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})

router.post('/login', (req, res, next) => {

    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ message: "Proporcionar email y contraseña." });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "Usuario no registrado" })
                return;
            }

            if (foundUser.validatePassword(password)) {
                const authToken = foundUser.signToken()
                res.status(200).json({ authToken })
            }
            else {
                res.status(401).json({ message: "Datos incorrectos" });
            }

        })
        .catch(err => next(err));
})

router.get('/verify', verifyToken, (req, res, next) => {
    res.json(req.payload)
})

module.exports = router