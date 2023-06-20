const CrudRepository = require("./crud-repository");
const { WalletCurrency,  users } = require("../models");

class WalletRepository extends CrudRepository {
    constructor() {
        super(WalletCurrency);
    }

    async addMoneyToWallet(id, value) {
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
        return response;
    }

 

    async getWalletInfo(id) {
        const response = await WalletCurrency.findAll(
        {
            where: { phoneNumber: id }
        }
        );
        if(!response){

        }
        return response;
    }
    

    
}

module.exports = WalletRepository;
