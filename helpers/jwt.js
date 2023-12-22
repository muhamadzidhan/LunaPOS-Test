const jwt = require('jsonwebtoken')

// SIGN TOKEN
function signToken(payload) {
    return jwt.sign(payload, "secret_key")
}

// VERIFY TOKEN
function verifyToken(token) {
    return jwt.verify(token, "secret_key")
}


module.exports = { signToken, verifyToken }