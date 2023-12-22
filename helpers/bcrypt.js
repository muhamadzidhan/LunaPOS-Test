const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    return bcrypt.hashSync(password)
}

const comparePassword = (password, passwordHash) => {
    return bcrypt.compareSync(password, passwordHash)
}

module.exports = { hashPassword, comparePassword }