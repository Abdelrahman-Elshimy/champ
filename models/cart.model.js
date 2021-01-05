const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/champ';

const cartSchema = mongoose.Schema({
    name: String,
    price: Number,
    amount: {
        default: 1,
        type: Number,
    },
    userId: String,
    productId: String,
    timestamp: Number,
})

const Cart = mongoose.model('cart', cartSchema);

exports.addNewCart = (data) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            let cart = new Cart(data);
            cart.save().then((data) => {
                mongoose.disconnect();
                resolve(data);
            }).catch(err => {
                mongoose.disconnect();
                reject('error on entering cart')
            })
        }).catch(err => reject('Error on DB'))
    });
}
exports.getCartsOfUser = (id) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then (() => {
            Cart.find({userId: id}).then((data) => {
                mongoose.disconnect();
                resolve(data);
            }).catch((err) => reject(err));
        }).catch(err => reject('Error on DB'))
    })
}