const fs = require('fs');
const path = require('path');

const writeBeneficiaries = (data) => {
    const teste = fs.writeFileSync(
        path.resolve(__dirname, '../data/beneficiarios.json'),
        JSON.stringify(data),
        {
            encoding: 'utf-8',
        }
    );

    return teste;
};

module.exports = { writeBeneficiaries };
