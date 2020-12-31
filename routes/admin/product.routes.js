const router = require('express').Router();
const productAdminController = require('../../controllers/admin/product.controller');

router.get('/products/:id', productAdminController.getProduct);


module.exports = router;