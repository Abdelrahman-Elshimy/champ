const router = require('express').Router();
const check = require('express-validator').check;
const adminUserController = require('./../../controllers/admin/users.controller');
const isAuthGuard = require('./../guards/auth.guard');
const bodyParser = require('body-parser');

router.get('/signup', isAuthGuard.isNotAuth, (req, res, next) => {
    res.render('admin/signup', {
        isUser: req.secure.userID,
    });
});

router.post('/signup', bodyParser.urlencoded({extended: true}), 
check('name').notEmpty().withMessage('Name must be filled'),
check('email').notEmpty().withMessage('Email must be filled').isEmail().withMessage('Email must be valid'),
check('phoneNumber').notEmpty().withMessage('Phone number must be filled').isNumeric().withMessage('Phone number must be numbers').isLength({min: 11, max: 11}).withMessage('phone Number must be 11 number'),
check('password').notEmpty().withMessage('Password must be filled').isLength({min: 6, max: 12}).withMessage('Password must be form 6 to 12 char'),
adminUserController.postNewUser);

router.get('/login', isAuthGuard.isNotAuth, (req, res, next) => {
    const error = req.flash('authError')[0];
    res.render('admin/login', {
        errs: error,
        isUser: req.session.userID,
    });
});

router.post('/login',bodyParser.urlencoded({extended: true}), adminUserController.postLoginUser);

router.all('/logout', adminUserController.logout)

module.exports = router;