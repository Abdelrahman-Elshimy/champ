const router = require('express').Router();


router.get('/champ', (req, res, next) => {
    res.render('customers/index')
})

module.exports = router;