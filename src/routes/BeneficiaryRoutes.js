const router = require('express').Router();

const CreateBeneficiaryController = require('../controllers/CreateBeneficiaryController');
const CreateProposalController = require('../controllers/CreateProposalController');

router.post('/', CreateBeneficiaryController.create);
router.get('/resume', CreateProposalController.create);

module.exports = router;
