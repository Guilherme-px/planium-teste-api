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
