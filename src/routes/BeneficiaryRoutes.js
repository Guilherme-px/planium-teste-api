const router = require('express').Router();

const CreateBeneficiaryController = require('../controllers/CreateBeneficiaryController');

router.post('/', CreateBeneficiaryController.create);

module.exports = router;
