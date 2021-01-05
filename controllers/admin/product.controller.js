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
exports.addProduct = (req, res, next) => {
    req.body.image = '1.png';
    productModel.addNewProduct(req.body).then(() => {
        res.redirect('/');
    }).catch(err => res.redirect('/addproduct'));
}