const CrudRepository = require("./crud-repository");
const { banks } = require("../models");

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
        console.log("repo");
        let response = await banks.findOne(
            {
                where: { phoneNumber: data.phoneNumber },
            }
        );
        
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

    async addMoneyToAcquirerBank(data) {

        let response = await banks.findOne(
            {
                where: { phoneNumber: data.phoneNumber },
            }
        );
        response = await banks.update({
            balance: Number(response.balance) + Number(data.amount)
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
