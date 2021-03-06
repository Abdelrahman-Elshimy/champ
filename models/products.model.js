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

// get all products
exports.getAllProducts = () => {
    // connect to db
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            Product.find().sort({_id: -1}).then((products) => {
                mongoose.disconnect();
                resolve(products);
            })
        }).catch(err => reject(err));
    })
    
}

// get all products from specific category
exports.getCategoryProducts = (category) => {
    // connect to db
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            Product.find({
                category: category
            }).then((products) => {
                mongoose.disconnect();
                resolve(products);
            })
        }).catch(err => reject(err));
    })
}
exports.getProductById = (id) => {
    return new Promise((resolve, reject) => {
            mongoose.connect(DB_URL).then(()=>{
                Product.findById(id).then((product) => {
                    mongoose.disconnect();
                    resolve(product);
                }).catch(err => reject(err))
            }).catch(err => reject(err));
    })
}

exports.addNewProduct = (product) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            let prod = new Product(product);
            prod.save().then(() => {
                mongoose.disconnect();
                resolve();
            }).catch(err => {
                mongoose.disconnect();
                reject('Error On DB')
            })
        }).catch(err => reject('Error On DB'))
    });
}