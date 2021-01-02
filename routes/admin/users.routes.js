const router = require('express').Router();
const adminUserController = require('./../../controllers/admin/users.controller');
const bodyParser = require('body-parser');

router.get('/signup', (req, res, next) => {
    res.render('admin/signup');
});

router.post('/signup',bodyParser.urlencoded({extended: true}), adminUserController.postNewUser);

router.get('/login', (req, res, next) => {
    res.render('admin/login');
});

router.post('/login',bodyParser.urlencoded({extended: true}), adminUserController.postLoginUser);

router.all('/logout', adminUserController.logout)

module.exports = router;