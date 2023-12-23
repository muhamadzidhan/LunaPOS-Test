const { TransaksiPenjualan, MasterProduct } = require("../models")


module.exports = class TransaksiPenjualanController {
    static async createPenjualan(req, res, next) {
        try {
            const { invoiceNo, invoiceDate, note, itemLines, totalBeforeTax, total } = req.body

            let product = MasterProduct.findByPk(itemLines)

            if (!product) {
                throw { name: "Product Not Found" }
            }

            let penjualan = await TransaksiPenjualan.create({
                invoiceNo, invoiceDate, note, itemLines, totalBeforeTax, total
            })

            res.status(201).json(penjualan)

        } catch (error) {
            next(error)
        }
    }

    static async editPenjualan(req, res, next) {
        try {
            const { invoiceNo, invoiceDate, note, itemLines, totalBeforeTax, total } = req.body

            let id = req.params.id

            let penjual = await TransaksiPenjualan.findByPk(id)
            
            if (!penjual) {
                throw { name: "Product Not Found" }
            }

            let pembeliUpdate = await TransaksiPenjualan.update({
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

    static async getPenjualan(req, res, next) {
        try {
            let penjualan = await TransaksiPenjualan.findAll({
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
            res.status(200).json(penjualan);
        } catch (error) {
            next(error)
        }
    }

    static async getPenjualanById(req, res, next) {
        try {
            let id = req.params.id

            let penjualan = await TransaksiPenjualan.findByPk(id)

            if (!penjualan) {
                throw { name: "Product Not Found" }
            }

            res.status(200).json(penjualan);
        } catch (error) {
            next(error)
        }
    }
}