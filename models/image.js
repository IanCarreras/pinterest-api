const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    url: String,
    title: String,
    username: { type: String, default: 'FretZila'},
    likes: { type: Number, default: 0 }
})

module.exports = mongoose.model('image', ImageSchema)
