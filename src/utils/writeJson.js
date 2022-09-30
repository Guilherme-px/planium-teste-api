const fs = require('fs');
const path = require('path');

const writeBeneficiaries = (data) => {
    fs.writeFileSync(
        path.resolve(__dirname, '../data/beneficiarios.json'),
        JSON.stringify(data),
        {
            encoding: 'utf-8',
        }
    );
};

module.exports = { writeBeneficiaries };
