const fs = require('fs');
const path = require('path');

module.exports = class GetPlansController {
    static getPlans(req, res) {
        const plans = fs.readFileSync(
            path.resolve(__dirname, '../data/plans.json'),
            {
                encoding: 'utf-8',
            }
        );

        return res.status(200).json(JSON.parse(plans));
    }
};
