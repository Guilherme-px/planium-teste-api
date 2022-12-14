const {
    readBeneficiaries,
    readPlans,
    readPrices,
} = require('../utils/readJson');

module.exports = class ListPricesController {
    static listPrice(req, res) {
        const prices = readPrices();
        const plans = readPlans();
        const beneficiaries = readBeneficiaries();

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

        pricePerBeneficiary.push({
            total: pricePerBeneficiary
                .map((price) => price.preço)
                .reduce((valueA, valueB) => valueA + valueB),
        });

        res.status(200).json({ pricePerBeneficiary });
    }
};
