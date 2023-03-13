const router = require("express").Router()

const uploader = require('./../middlewares/cloudinary.middleware')

router.post('/image', uploader.array('imageData', 10), (req, res) => {

    if (!req.files) {
        res.status(500).json({ errorMessage: 'Error cargando el archivo' })
        return
    }

    const images = req.files.map(image => image.path)

    res.json(images)
})

module.exports = router
