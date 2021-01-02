const adminUserModel = require('./../../models/users.model');

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
    adminUserModel.LoginUser(req.body.email, req.body.password).then(userID => {
        req.session.userID = userID;
        res.redirect('/');
    }).catch(err => {
        res.render('admin/login', {
            errs: err
        })
    })
}

exports.logout = (req, res, next) => {
    req.session.destroy(()=>{
        res.redirect('/')
    });
}