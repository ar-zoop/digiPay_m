const CrudRepository = require("./crud-repository");
const { banks } = require("../models");
const { response } = require("express");

class IABankRepository extends CrudRepository {
    constructor() {
        super(banks);
    } 

    async createBank(data) {
       
        data.phoneNumber = Number(data.phoneNumber);
        data.balance = Number(data.balance);
        const response = await banks.create(
            data
        );
        return response;
    }

    async reduceMoneyFromIssuerBank(data){
        console.log(data.balance, data.phoneNumber);
        let response = await banks.findOne(
            {
                where: { phoneNumber: data.phoneNumber },
            }
        );
        console.log(response.balance - data.balance);
        response = await banks.update({
           balance: response.balance- data.balance
        }, {
            where: {
                phoneNumber: data.phoneNumber
            }
        }
        );
   
        return response;
    }

}
module.exports = IABankRepository;
