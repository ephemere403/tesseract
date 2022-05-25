const express = require('express')
const controller = require('../controllers/artiControll')
const router = express.Router()
const authenticate = require('../middleware/verifyToken')

router.get('/', controller.getAllArticles)

router.get('/:id', controller.getArticle)

router.delete('/:id', controller.deleteArticle)

router.post('/', controller.postArticle)

router.patch('/', controller.updateArticle)


module.exports = router