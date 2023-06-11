const CrudRepository = require("./crud-repository");
const { WalletCurrency, bankAccount, users } = require("../models");
const { response } = require("express");

class WalletRepository extends CrudRepository {
    constructor() {
        super(WalletCurrency);
    }

    async addMoneyToWallet(id, value) {
        console.log("addmonrytowallet ", id, value)
        const data = { phoneNumber: id, value: value };
        const response = await WalletCurrency.create(
            data
        );
        return response;
    }


    async getPhoneNumber(id) {
        const response = await users.findOne(
            {
                where: { phoneNumber: id }
            }
        );
        console.log(response);
        return response;
    }

    async deleteNotes(id, value) {
        const row = await WalletCurrency.findOne({
            where: {
                phoneNumber: id,
                value: value
            }
        });

        if (row) {
            await row.destroy(); 
        }
    }

    async getWalletInfo(id) {
        console.log(typeof(id));
        const response = await WalletCurrency.findAll(
        {
            where: { phoneNumber: id }
        }
        );
        console.log(response);
        if(!response){

        }
        return response;
    }

    
}

module.exports = WalletRepository;
