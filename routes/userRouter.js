const express = require('express')
const { getAllUser, addUser } = require('../controllers/userController')
const router = express.Router()

router.get('/', getAllUser)

router.post('/', addUser)

module.exports = router