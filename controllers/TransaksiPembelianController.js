const { TransaksiPembelian, MasterProduct } = require("../models")


module.exports = class TransaksiPembelianController {
    static async createPembelian(req, res, next) {
        try {
            const { invoiceNo, invoiceDate, note, itemLines, totalBeforeTax, total } = req.body

            let product = MasterProduct.findByPk(itemLines)

            if (!product) {
                throw { name: "Product Not Found" }
            }

            let pembelian = await TransaksiPembelian.create({
                invoiceNo, invoiceDate, note, itemLines, totalBeforeTax, total
            })

            res.status(201).json(pembelian)

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async editPembelian(req, res, next) {
        try {
            const { invoiceNo, invoiceDate, note, itemLines, totalBeforeTax, total } = req.body

            let id = req.params.id

            let pembeli = await TransaksiPembelian.findByPk(id)

            if (!pembeli) {
                throw { name: "Product Not Found" }
            }

            let pembeliUpdate = await TransaksiPembelian.update({
                invoiceNo, invoiceDate, note, itemLines, totalBeforeTax, total
            }, {
                where: {
                    id
                }
            })

            const message = `entity with id ${pembeli.id} updated`

            res.status(200).json({ message })

        } catch (error) {
            next(error)
        }
    }

    static async getPembelian(req, res, next) {
        try {
            let pembelian = await TransaksiPembelian.findAll({
                include: [
                    {
                        model: MasterProduct,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                    }
                ],
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            })
            res.status(200).json(pembelian);
        } catch (error) {
            next(error)
        }
    }

    static async getPembelianById(req, res, next) {
        try {
            let id = req.params.id

            let pembelian = await TransaksiPembelian.findByPk(id)

            if (!pembelian) {
                throw { name: "Product Not Found" }
            }

            res.status(200).json(pembelian);
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}