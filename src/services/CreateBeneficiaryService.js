const { writeBeneficiaries } = require('../utils/writeJson');
const { readPlans } = require('../utils/readJson');

module.exports = class CreateBeneficiaryService {
    static async execute({ res, beneficiaries, quantity, plan }) {
        const beneficiariesArray = [];
        const newBeneficiaries = [
            {
                beneficiarios: beneficiaries,
                quantidade: quantity,
                registro: plan,
            },
        ];

        for (let beneficary of beneficiaries) {
            beneficiariesArray.push({
                benificiarios: {
                    name: beneficary.name,
                    age: beneficary.age,
                },
            });
        }

        const plans = readPlans();

        const planExists = await plans.findIndex(
            (val) => val.registro === plan
        );

        if (planExists < 1) {
            res.status(404).json({ msg: 'Plano não encontrado!' });
            return;
        }

        writeBeneficiaries(newBeneficiaries);

        return newBeneficiaries;
    }
};
