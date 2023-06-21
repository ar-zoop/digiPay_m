const CrudRepository = require("./crud-repository"); // Importing the CrudRepository class
const { banks } = require("../models"); // Importing the banks model

class IABankRepository extends CrudRepository {
    constructor() {
        super(banks); // Calling the constructor of the parent CrudRepository class with the banks model
    }

    async createBank(data) {
        data.phoneNumber = Number(data.phoneNumber); // Converting the phoneNumber to a number
        data.balance = Number(data.balance); // Converting the balance to a number
        const response = await banks.create(data); // Creating a new bank record with the provided data
        return response; // Returning the response
    }

    async reduceMoneyFromIssuerBank(data) {
        console.log("repo"); // Logging a message
        let response = await banks.findOne({ // Finding a bank record with the provided phoneNumber
            where: { phoneNumber: data.phoneNumber },
        });

        response = await banks.update({ // Updating the balance of the bank record
            balance: response.balance - data.balance
        }, {
            where: {
                phoneNumber: data.phoneNumber
            }
        });

        return response; // Returning the response
    }

    async addMoneyToAcquirerBank(data) {
        let response = await banks.findOne({ // Finding a bank record with the provided phoneNumber
            where: { phoneNumber: data.phoneNumber },
        });
        response = await banks.update({ // Updating the balance of the bank record
            balance: Number(response.balance) + Number(data.amount)
        }, {
            where: {
                phoneNumber: data.phoneNumber
            }
        });

        return response; // Returning the response
    }
}

module.exports = IABankRepository; // Exporting the IABankRepository class
