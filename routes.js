const express = require('express')
const router = express.Router()

const imageController = require('./controllers/ImageController')

router.post('/add', imageController.addNewImage)
router.get('/images', imageController.getImages)
router.delete('/delete', imageController.deleteImage)

module.exports = router
