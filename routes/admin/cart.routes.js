const router = require('express').Router();
const authGuard = require('../guards/auth.guard');
const bodyParser = require('body-parser');

const cartController = require('./../../controllers/admin/cart.controller');

router.get('/cart', authGuard.isAuth, cartController.getCarts)
router.post('/cart', authGuard.isAuth, bodyParser.urlencoded({extended: false}), cartController.addCarts)

module.exports = router;