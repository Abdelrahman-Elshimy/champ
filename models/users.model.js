const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/champ';

const userSchema = mongoose.Schema({
    name: String,
    phoneNumber: Number,
    email: String,
    password: String,
    role: Number
});

const User = mongoose.model('user', userSchema);

exports.AddNewUser = (user) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            User.findOne({ email: user.email }).then((userGet) => {
                if (userGet) {
                    mongoose.disconnect();
                    reject('email is used')
                }
                else {
                    let userNew = new User(user);
                    userNew.save().then(() => {
                        mongoose.disconnect();
                        resolve()
                    })
                }
            })
        }).catch((err) => {
            mongoose.disconnect();
            reject(err)
        });
    })
}

exports.LoginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            User.findOne({
                email: email,
                password: password
            }).then((user) => {
                if (user) {
                    mongoose.disconnect();
                    resolve(user);
                }
                else {
                    mongoose.disconnect();
                    reject('Data Is Not Correct')
                }

            })
        }).catch((err) => {
            mongoose.disconnect();
            reject(err)
        });
    })
}