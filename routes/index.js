const express = require("express");
const router = express.Router();
const user = require("./user")
const masterProduct = require("./masterProduct")

router.use(user)
router.use(masterProduct)


module.exports = router