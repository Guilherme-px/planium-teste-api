const { readPrices } = require('../utils/readJson');

module.exports = class GetPricesContoller {
    static getPrices(req, res) {
        const prices = readPrices();

        return res.status(200).json(prices);
    }
};
