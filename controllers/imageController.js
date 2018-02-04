const ImageModel = require('../models/image')

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
