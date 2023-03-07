const router = require("express").Router()
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const saltRounds = 10
const jwt = require('jsonwebtoken')
const { verifyToken } = require("../middlewares/verifyToken")

router.post('/signup', (req, res, next) => {

    const { email, password, username, avatar, description, interests, role, gender, age } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: 'Debe tener al menos 2 caracteres' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "El usuario ya existe" })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, username, avatar, description, interests, role, gender, age })
        })
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

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username, role } = foundUser;
                const payload = { _id, email, username, role }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

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