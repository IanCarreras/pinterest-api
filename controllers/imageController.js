const Image = require('../models/Image')

exports.addNewImage = (req, res) => {
  const { title, url } = req.body
  const record = new Image({
    title,
    url
  })
  record.save(error => {
    if (error) return res.status(500).send({ success: false })
    res.status(200).send(record)
  })
}

exports.getImages = (req, res) => {
  Image.find({}, (err, images) => {
    if (err) return res.status(500).send({ success: false })
    res.status(200).send(images)
  })
}

exports.deleteImage = (req, res) => {
  Image.findByIdAndRemove(req.body.id, (err, image) => {
    if (err) return res.status(500).send({ success: false })
    if (!image) return res.status(500).send({ success: false, msg: "didn't find image in database"})
    res.status(200).send({ success: true })
  })
}
