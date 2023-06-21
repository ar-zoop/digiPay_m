const CrudRepository = require("./crud-repository"); // Importing the CrudRepository class
const { WalletCurrency, users } = require("../models"); // Importing the WalletCurrency and users models

class WalletRepository extends CrudRepository {
    constructor() {
        super(WalletCurrency); // Calling the constructor of the parent CrudRepository class with the WalletCurrency model
    }

    async addMoneyToWallet(id, value) {
        const data = { phoneNumber: id, value: value }; // Creating a data object with the provided phoneNumber and value
        const response = await WalletCurrency.create(data); // Creating a new WalletCurrency record with the provided data
        return response; // Returning the response
    }

    async getPhoneNumber(id) {
        const response = await users.findOne({ // Finding a user record with the provided phoneNumber
            where: { phoneNumber: id }
        });
        return response; // Returning the response
    }

    async getWalletInfo(id) {
        const response = await WalletCurrency.findAll({ // Finding all WalletCurrency records with the provided phoneNumber
            where: { phoneNumber: id }
        });
        if (!response) {
            // Handle case where there is no response
        }
        return response; // Returning the response
    }
}

module.exports = WalletRepository; // Exporting the WalletRepository class
