const express = require('express')
const controller = require('../controllers/dripControll')
const router = express.Router()

router.get('/', controller.getAllproducts)

router.get('/:id', controller.getProduct)

router.delete('/:id', controller.deleteProduct)

router.post('/', controller.postProduct)

router.patch('/', controller.updateProduct)


module.exports = router