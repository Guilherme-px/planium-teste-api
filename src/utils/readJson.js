const fs = require('fs');
const path = require('path');

const readBeneficiaries = () => {
    return JSON.parse(
        fs.readFileSync(path.resolve(__dirname, '../data/beneficiarios.json'), {
            encoding: 'utf-8',
        })
    );
};

const readPlans = () => {
    return JSON.parse(
        fs.readFileSync(path.resolve(__dirname, '../data/plans.json'), {
            encoding: 'utf-8',
        })
    );
};

const readPrices = () => {
    return JSON.parse(
        fs.readFileSync(path.resolve(__dirname, '../data/prices.json'), {
            encoding: 'utf-8',
        })
    );
};

module.exports = { readBeneficiaries, readPlans, readPrices };
