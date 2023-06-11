const CrudRepository = require("./crud-repository");
const { bankAccount } = require("../models");
const { response } = require("express");

class BankRepository extends CrudRepository {
    constructor() {
        super(bankAccount);
    }

    async createBank(data) {
        data.phoneNumber = Number(data.phoneNumber);
        data.balance = Number(data.balance);
        const response = await bankAccount.create(
            data
        );
        return response;
    }

    async getBank(id) {
        const response = await bankAccount.findOne(
            {
                where: { phoneNumber: id },
            }
        );
        return response;
    }

    async getPhoneNumber(id) {
        const response = await bankAccount.findOne(
            {
                where: { phoneNumber: id }
            }
        );
        return response;
    }

    async updateBalance(id, balance) {
        console.log(id,balance)
        const response = await bankAccount.update({
            balance: balance
        }, {
            where: {
                phoneNumber: id
            }
        }
        );
        console.log(response);
        
        return response;
    }

}

module.exports = BankRepository;
