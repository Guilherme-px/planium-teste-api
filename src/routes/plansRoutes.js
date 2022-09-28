const router = require('express').Router();

const GetPlansContoller = require('../controllers/GetPlansContoller');

router.get('/', GetPlansContoller.getPlans);

module.exports = router;
