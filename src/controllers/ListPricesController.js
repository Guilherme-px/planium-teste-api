const fs = require('fs');
const { platform } = require('os');
const path = require('path');

module.exports = class ListPricesController {
    static listPrice(req, res) {
        const prices = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, '../data/prices.json'), {
                encoding: 'utf-8',
            })
        );

        const plans = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, '../data/plans.json'), {
                encoding: 'utf-8',
            })
        );

        const beneficiaries = JSON.parse(
            fs.readFileSync(
                path.resolve(__dirname, '../data/beneficiarios.json'),
                {
                    encoding: 'utf-8',
                }
            )
        );

        const register = beneficiaries.find((val) => val);
        const plan = plans.find((val) => val.registro === register.registro);

        const price = prices.find((val) => val.codigo === plan.codigo);

        const listAges = register.beneficiarios;

        const age = listAges.map((listAge) => {
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

        pricePerBeneficiary.push({
            total: pricePerBeneficiary
                .map((price) => price.preço)
                .reduce((valueA, valueB) => valueA + valueB),
        });

        res.status(200).json({ pricePerBeneficiary });
    }
};
