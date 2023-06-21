const CrudRepository = require("./crud-repository");
const { voucherDetails } = require("../models");

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

    async updateVoucher(data){
      
        data.phoneNumber=Number(data.phoneNumber);
        data.voucherId=Number(data.voucherId);
        const response = await voucherDetails.update({
           expiryDate: data.expiryDate
        }, {
            where: {
                voucherId: data.voucherId
            }
        }
        );

        return response;
    }

    async updateVoucherBalance(data) {
        data.phoneNumber = Number(data.phoneNumber);
        data.voucherId = Number(data.voucherId);
        data.amount=Number(data.amount);

        let response = await voucherDetails.findOne(
            {
                where: { 
                    voucherId:data.voucherId 
                },
            }
        );
        response = await voucherDetails.update({
            amount: Number(response.amount)- Number(data.amount)
        }, {
            where: {
                voucherId: data.voucherId
            }
        }
        );

        return response;
    }

    async getVoucher(data) {
        data.phoneNumber = Number(data.phoneNumber);
        
        const response = await voucherDetails.findAll(
            {
            where: {
                phoneNumber: data.phoneNumber
            }
        });
        return response;
    }



}

module.exports = VoucherRepository;
