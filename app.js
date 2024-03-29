const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const router = require("./routes/index")
const {errorHandler} = require("./middlewares/errorHandler")

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())//untuk parsing body JSON

app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


module.exports = app