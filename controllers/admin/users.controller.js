const validatorResult = require('express-validator').validationResult;
const adminUserModel = require('./../../models/users.model');

exports.postNewUser = (req, res, next) => {
    if (!validatorResult(req).array().length > 0) {
        adminUserModel.AddNewUser(req.body).then(() => {
            res.redirect('login');
        }).catch(err => {
            res.render('admin/signup', {
                errs: err
            })
        });
    }
    else {
        res.render('admin/signup', {
            validateErrors: validatorResult(req).array()
        })
    }
}

exports.postLoginUser = (req, res, next) => {
    adminUserModel.LoginUser(req.body.email, req.body.password).then(userID => {
        req.session.userID = userID;
        res.redirect('/');
    }).catch(err => {
        req.flash('authError', 'Email or password not correct');
        res.redirect('/login');
    })
}

exports.logout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/')
    });
}