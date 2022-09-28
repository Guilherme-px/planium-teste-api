const CreateBeneficiaryService = require('../services/CreateBeneficiaryService');

module.exports = class CreateBeneficiaryController {
    static async create(req, res) {
        const { beneficiaries, quantity, plan } = req.body;

        const beneficiary = await CreateBeneficiaryService.execute({
            res,
            plan,
            quantity,
            beneficiaries,
        });

        return res.status(201).json(beneficiary);
    }
};
