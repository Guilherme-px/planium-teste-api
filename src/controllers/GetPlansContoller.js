const { readPlans } = require('../utils/readJson');

module.exports = class GetPlansController {
    static getPlans(req, res) {
        const plans = readPlans();

        return res.status(200).json(plans);
    }
};
