const router = require('express').Router();

const GetPriceController = require('../controllers/GetPriceController');

router.get('/', GetPriceController.getPrices);

module.exports = router;
