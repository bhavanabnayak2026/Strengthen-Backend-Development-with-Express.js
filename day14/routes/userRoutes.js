const express = require('express')
const createUserController = require('../controllers/userController')

// router lets us create a group of related routes separately from app.js.
const router = express.Router()

router.post('/users', createUserController)

module.exports = router

//Notice that the route doesn't contain business logic.