const productModel = require('../../models/products.model')

exports.getHome = (req, res, next) => {


    if (req.query.category !== undefined && req.query.category !== 'All') {
        productModel.getCategoryProducts(req.query.category).then(products => {
            res.render('admin/main', {
                products: products,
                isUser: req.session.userID
            })
        });
    }
    else {
        // get products
        productModel.getAllProducts().then((products) => {
            res.render('admin/main', {
                products: products,
                isUser: req.session.userID
            })
        })
    }

}