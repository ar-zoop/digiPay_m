const CrudRepository = require("./crud-repository"); // Importing the CrudRepository class
const { merchants } = require("../models"); // Importing the merchants model

class MerchantRepository extends CrudRepository {
    constructor() {
        super(merchants); // Calling the constructor of the parent CrudRepository class with the merchants model
    }

    async createUser(phoneNumber, password, purpose) {
        const data = {
            phoneNumber: phoneNumber, password: password, purpose: purpose
        }; // Creating a data object with the provided parameters
        const response = await merchants.create(data); // Creating a new merchant record with the provided data
        return response; // Returning the response
    }

    async getUser(id) {
        const response = await merchants.findOne({ // Finding a merchant record with the provided phoneNumber
            where: { phoneNumber: id }
        });
        return response; // Returning the response
    }
}

module.exports = MerchantRepository; // Exporting the MerchantRepository class
