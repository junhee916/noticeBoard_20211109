const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const user = require('../controllers/userController')

// total get user
router.get('/', checkAuth, user.getAll)

// detail get user
router.get('/:userId', checkAuth, user.get)

// signup
router.post('/signup', user.signup)

// login
router.post('/login', user.login)

// update user
router.patch('/:userId', checkAuth, user.update)

// total delete user
router.delete('/', checkAuth, user.deleteAll)

// detail delete user
router.delete('/:userId', checkAuth, user.delete)

module.exports = router