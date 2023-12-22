const { User } = require("../models")
const { comparePassword } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")


module.exports = class UserController {
    static async register(req, res, next) {
        try {
            const { fullName, email, password, companyName } = req.body

            let register = await User.create({
                fullName, email, password, companyName
            })
            res.status(201).json(register);
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                throw { name: "REQUIRED" };
            }

            let user = await User.findOne({ where: { email } })

            if (!user) {
                throw { name: 'INVALID' }
            }

            let isValid = comparePassword(password, user.password)

            if (!isValid) {
                throw { name: 'INVALID' }
            }

            let access_token = signToken({ id: user.id })

            res.status(200).json({
                access_token: access_token,
                data: {
                    userId: user.id,
                    fullName: user.fullName,
                    email: user.email,
                    password: user.password,
                    companyName: user.companyName
                }
            })

        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}