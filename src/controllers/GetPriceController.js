const fs = require('fs');
const path = require('path');

module.exports = class GetPricesContoller {
    static getPrices(req, res) {
        const prices = fs.readFileSync(
            path.resolve(__dirname, '../data/prices.json'),
            {
                encoding: 'utf-8',
            }
        );

        return res.status(200).json(JSON.parse(prices));
    }
};
