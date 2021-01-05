const { now } = require('mongoose');
const adminCartModel = require('../../models/cart.model');
const adminProductModel = require('../../models/products.model');

exports.addCarts = (req, res, next) => {
    let cart = {
        name: req.body.name,
        price: req.body.price * req.body.amount,
        amount: req.body.amount,
        userId: req.session.userID,
        productId: req.body.productId,
        timestamp: now(),
    }
    adminCartModel.addNewCart(cart).then((data) => {
        res.redirect('/')
    }).catch((err) => {
        console.log(err);
    })
}

exports.getCarts = (req, res, next) => {
    adminCartModel.getCartsOfUser(req.session.userID).then((data) => {
        adminProductModel.getProductById(data[0].productId).then((product) => {
            res.render('admin/cart', {
                carts: data,
                isUser: req.session.userID,
                product: product
            })
        }).catch(err => {

            res.redirect('/')
        })
        
    }).catch(err => {
        res.redirect('/')
    })
}