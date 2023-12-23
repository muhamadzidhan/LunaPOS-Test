const express = require("express");
const router = express.Router();
const user = require("./user")
const masterProduct = require("./masterProduct")
const transaksiPembelian = require("./transaksiPembelian")

router.use(user)
router.use(masterProduct)
router.use(transaksiPembelian)


module.exports = router