const router = require('express').Router();
const productAdminController = require('../../controllers/admin/product.controller');
const bodyParser = require('body-parser');

router.get('/products/:id', productAdminController.getProduct);
router.get('/addproduct', (req, res, next) => {
    res.render('admin/addproduct', {
        isUser: req.session.userID
    });
})

router.post('/addproduct', bodyParser.urlencoded({extended: false}), productAdminController.addProduct);

module.exports = router;