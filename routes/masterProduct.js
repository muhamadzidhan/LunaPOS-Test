const router = require('express').Router()
const MasterProductsController = require("../controllers/MasterProductsController")
const { authentication } = require("../middlewares/authentication")

router.get('/product', authentication, MasterProductsController.getProduct)
router.get('/product/:id', authentication, MasterProductsController.getProductById)
router.post('/product', authentication, MasterProductsController.createProduct)
router.put('/product/:id', authentication, MasterProductsController.editProduct)
router.delete('/product/:id', authentication, MasterProductsController.deleteProduct)

module.exports = router