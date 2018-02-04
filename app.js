const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const UserController = require('./controllers/UserController')
//app.use('/users', UserController)

app.use('/', require('./routes'))

module.exports = app
