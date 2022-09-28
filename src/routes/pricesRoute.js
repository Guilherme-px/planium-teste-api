const router = require('express').Router();

const GetPriceController = require('../controllers/GetPriceController');
const ListPricesController = require('../controllers/ListPricesController');

router.get('/', GetPriceController.getPrices);
router.get('/list', ListPricesController.listPrice);

module.exports = router;
