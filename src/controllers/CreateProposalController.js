const fs = require('fs');
const path = require('path');
const {
    readBeneficiaries,
    readPlans,
    readPrices,
} = require('../utils/readJson');

module.exports = class CreateProposalController {
    static create(req, res) {
        const beneficiaries = readBeneficiaries();
        const plans = readPlans();
        const prices = readPrices();

        const plan = plans.find((val) => val.registro === beneficiaries.plan);

        const price = prices.find((val) => val.codigo === plan.codigo);

        const age = beneficiaries.beneficiaries.map((listAge) => {
            return listAge.age;
        });

        const pricePerBeneficiary = [];

        for (let i in age) {
            if (age[i] <= 17) {
                pricePerBeneficiary.push({
                    idade: age[i],
                    preço: price.faixa1,
                });
            } else if (age[i] >= 18 && age[i] <= 40) {
                pricePerBeneficiary.push({
                    idade: age[i],
                    preço: price.faixa2,
                });
            } else {
                pricePerBeneficiary.push({
                    idade: age[i],
                    preço: price.faixa3,
                });
            }
        }

        const priceTotal = [];

        priceTotal.push({
            total: pricePerBeneficiary
                .map((price) => price.preço)
                .reduce((valueA, valueB) => valueA + valueB),
        });

        const proposal = {
            beneficiaries,
            plan,
            pricePerBeneficiary,
            priceTotal,
        };

        fs.writeFileSync(
            path.resolve(__dirname, '../data/proposta.json'),
            JSON.stringify(proposal),
            {
                encoding: 'utf-8',
            }
        );

        return res.status(201).json(proposal);
    }
};
