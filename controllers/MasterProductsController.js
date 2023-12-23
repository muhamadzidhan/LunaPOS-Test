const { MasterProduct, Tax } = require("../models")


module.exports = class MasterProductsController {
    static async createProduct(req, res, next) {
        try {
            const { sku, itemName, uom, category, itemCost, itemPrice, taxId } = req.body

            let tax = Tax.findByPk(taxId)

            if (!tax) {
                throw { name: "Tax Not Found" }
            }

            let product = await MasterProduct.create({
                sku, itemName, uom, category, itemCost, itemPrice, taxId
            })

            res.status(201).json(product)

        } catch (error) {
            next(error)
        }
    }

    static async editProduct(req, res, next) {
        try {
            const { itemName, uom, category, itemCost, itemPrice, taxId } = req.body

            let id = req.params.id

            let product = await MasterProduct.findByPk(id)

            if (!product) {
                throw { name: "Product Not Found" }
            }

            let tax = Tax.findByPk(taxId)

            if (!tax) {
                throw { name: "Tax Not Found" }
            }

            let productUpdate = await MasterProduct.update({
                itemName, uom, category, itemCost, itemPrice, taxId
            }, {
                where: {
                    id
                }
            })

            // console.log(productUpdate, "[][][][][][][][]");

            const message = `entity with id ${product.id} updated`

            res.status(200).json({ message })

        } catch (error) {
            next(error)
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            let id = req.params.id

            let product = await MasterProduct.findByPk(id)

            if (!product) {
                throw { name: "Product Not Found" }
            }

            await product.destroy()
            let message = `${product.itemName} has been deleted`;

            res.status(200).json({ message });

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getProduct(req, res, next) {
        try {
            let product = await MasterProduct.findAll({
                include: [
                    {
                        model: Tax,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                    }
                ],
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            })

            res.status(200).json(product);

        } catch (error) {
            next(error)
        }
    }

    static async getProductById(req, res, next) {
        try {
            let id = req.params.id

            console.log(id, "INNIIIII");

            let product = MasterProduct.findByPk(id)

            if (!product) {
                throw { name: "Product Not Found" }
            }

            res.status(200).json(product);

        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}