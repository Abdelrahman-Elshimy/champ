const router = require('express').Router();

const homeAdminController = require('../../controllers/admin/home.controller');
router.get('/', homeAdminController.getHome);
module.exports = router;