const CrudRepository = require("./crud-repository");
const { voucherDetails } = require("../models");
const { response } = require("express");

class VoucherRepository extends CrudRepository {
    constructor() {
        super(voucherDetails);
    }

    async createVoucher(data) {
        data.phoneNumber = Number(data.phoneNumber);
        data.amount = Number(data.amount);
        const response = await voucherDetails.create(
            data
        );
        return response;
    }
}

module.exports = VoucherRepository;
