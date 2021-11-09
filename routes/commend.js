const express = require('express')
const router = express.Router()

const checkAuth = require('../middleware/check_auth')
const commend = require('../controllers/commendController')

// get commend
router.get('/:commendId', checkAuth, commend.get)

// register commend
router.post('/', checkAuth, commend.save)

// update commend
router.patch('/:commendId', checkAuth, commend.update)

// delete commend
router.delete('/:commendId', commend.delete)

module.exports = router