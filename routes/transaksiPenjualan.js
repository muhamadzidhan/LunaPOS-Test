const router = require('express').Router()
const TransaksiPenjualanController = require("../controllers/TransaksiPenjualanController")
const { authentication } = require("../middlewares/authentication")


router.get("/sales", authentication, TransaksiPenjualanController.getPenjualan)
router.get("/sales/:id", authentication, TransaksiPenjualanController.getPenjualanById)
router.post("/sales", authentication, TransaksiPenjualanController.createPenjualan)
router.put("/sales/:id", authentication, TransaksiPenjualanController.editPenjualan)


module.exports = router