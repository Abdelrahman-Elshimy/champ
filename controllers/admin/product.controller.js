const productModel = require('../../models/products.model')

exports.getProduct = (req, res, next) => {
    productModel.getProductById(req.params.id).then((product) => {
        res.render('admin/product', {
            product: product,
            isUser: req.session.userID
        })
    }).catch(() => {
        res.redirect('/')
    })
}