const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/champ';

const productSchema = mongoose.Schema({
    name: String, 
    price: Number,
    category: String,
    description: String,
    image: String
});

const Product = mongoose.model('product', productSchema);

exports.getAllProducts = () => {
    // connect to db
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            Product.find().then((products) => {
                mongoose.disconnect();
                resolve(products);
            })
        }).catch(err => reject(err));
    })
    
}