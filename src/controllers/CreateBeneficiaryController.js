const fs = require('fs');
const path = require('path');

module.exports = class CreateBeneficiaryController {
    static async create(req, res) {
        const { beneficiaries, quantity, plan } = req.body;

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

        const plans = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, '../data/plans.json'), {
                encoding: 'utf-8',
            })
        );

        const planExists = await plans.findIndex(
            (val) => val.registro === plan
        );

        if (planExists < 1) {
            return res.status(404).json({ msg: 'Plano não encontrado!' });
        }

        fs.writeFileSync(
            path.resolve(__dirname, '../data/beneficiarios.json'),
            JSON.stringify(newBeneficiaries),
            {
                encoding: 'utf-8',
            }
        );
    }
};
