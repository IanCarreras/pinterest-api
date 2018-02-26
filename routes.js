const express = require('express')
const router = express.Router()

const imageController = require('./controllers/ImageController')

router.post('/image', imageController.addNewImage)
router.get('/images', imageController.getImages)
router.delete('/image/:id', imageController.deleteImage)

module.exports = router
