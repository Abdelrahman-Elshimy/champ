const productModel = require('../../models/products.model')

exports.getHome = (req, res, next) => {
    // get products
    productModel.getAllProducts().then((products) => {
        res.render('admin/main', {
            products: products
        })
    })

}