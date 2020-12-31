const adminUserModel = require('./../../models/users.model');
const productModel = require('../../models/products.model')

exports.postNewUser = (req, res, next) => {
    adminUserModel.AddNewUser(req.body).then(() => {
        res.redirect('login');
    }).catch(err => {
        res.render('admin/signup', {
            errs: err
        })
    });
}

exports.postLoginUser = (req, res, next) => {
    adminUserModel.LoginUser(req.body.email, req.body.password).then(user => {
        productModel.getAllProducts().then((products) => {
            res.render('admin/main', {
                products: products,
                user: user
            })
        })
    }).catch(err => {
        res.render('admin/login', {
            errs: err
        })
    })
}