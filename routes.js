const mongoose = require('mongoose')
const User = require('./models/user')
const express = require('express')
const router = express.Router()


router.post('/user', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  },
  (err, user) => {
    if (err) return res.status(500).send('There was a problem adding information to the database')
    res.status(200).send(user)
  })
})

router.get('/user', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send('There was a problem finding the users')
    res.status(200).send(users)
  })
})

router.delete('/danger', (req, res) => {
  User.remove({}, err => {
    if (err) return res.send({ msg: 'error deleting DB', success: flase })
    res.send({ success: true, msg: 'deleted everything!' })
  })
})


module.exports = router
