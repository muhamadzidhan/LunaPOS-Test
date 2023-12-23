const router = require('express').Router()
const TransaksiPembelianController = require("../controllers/TransaksiPembelianController")
const { authentication } = require("../middlewares/authentication")


router.get("/purchase", authentication, TransaksiPembelianController.getPembelian)
router.get("/purchase/:id", authentication, TransaksiPembelianController.getPembelianById)
router.post("/purchase", authentication, TransaksiPembelianController.createPembelian)
router.put("/purchase/:id", authentication, TransaksiPembelianController.editPembelian)


module.exports = router