const bodyParser = require('body-parser')
const cors = require('cors')

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/RESTful')

app.use(bodyParser.json())
app.use(cors())

app.use('/', require('./routes'))

const port = process.env.PORT || 3030
app.listen(port, () => {
  console.log('Server running on port', port)
})
