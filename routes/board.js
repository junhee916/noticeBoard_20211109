const express = require('express')
const router = express.Router()
const multer = require('multer')
const checkAuth = require('../middleware/check_auth')
const board = require('../controllers/boardController')

const storage = multer.diskStorage({

    destination : function(req, file, cb){
        cb(null, './uploads')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {

    if(file.mimetype === 'image/png' || file.mimetype === 'image/png'){
        cb(null, true)
    }
    else{
        cb(null, false)
    }
}

const upload = multer({
    storage : storage,
    limit : {
        filesize : 1024*1024*5
    },
    fileFilter : fileFilter
})

// total get board
router.get('/', checkAuth, board.getAll)

// detail get board
router.get('/:boardId', checkAuth, board.get)

// register board
router.post('/', checkAuth, upload.single('boardImage'), board.save)

// update board
router.patch('/:boardId', checkAuth, board.update)

// total delete board
router.delete('/', checkAuth, board.deleteAll)

// detail delete board
router.delete('/:boardId', checkAuth, board.delete)

module.exports = router