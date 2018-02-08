const Image = require('../models/Image')

exports.addNewImage = (req, res) => {
  const { url, title } = req.body
  const record = new ImageModel({
    url,
    title
  })
  record.save(error => {
    if(error) return res.send('Problem saving new record to database')
    res.send(record)
  })
}

exports.getImages = (req, res) => {
  Image.find({}, (err, images) => {
    if(err) return res.status(500).send('Problem retrieving images from database')
    res.status(200).send(images)
  })
}
