const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models")


async function authentication(req, res, next) {
    try {
        //1.tangkap tokennya
        //console.log("masuk ke midleware authentication");
        let access_token = req.headers.access_token
        //2. validasi apakah user mengirim token => kalau tidak lempar error
        console.log(access_token, "<<<<<<< acc token");
        // if (!access_token) throw ({ name: "InvalidToken" })

        //3. verify token =>  kalau tidak valid lempar error
        let payload = verifyToken(access_token)
        // console.log(payload, "<<<<<<<< PAYLOAD");

        //4.cari user dari token yang sudah di verify => kalau user tidak ada lempar error
        let user = await User.findByPk(payload.id)//mencari payload.id
        if (!user) throw ({ name: "Unauthenticated" })

        //5. simpan informasi user yang  akan dibutuhkan di controller, seperti role 
        req.user = {
            id: user.id,
            email: user.email,
            name: user.username,
            role: user.role
        }
        //6.next
        next();
    } catch (error) {
        console.log(error, "<<<<<<< err auth");
        next(error)
    }
}

module.exports = { authentication }