const CrudRepository = require("./crud-repository"); // Importing the CrudRepository class
const { users } = require("../models"); // Importing the users model

class UserRepository extends CrudRepository {
    constructor() {
        super(users); // Calling the constructor of the parent CrudRepository class with the users model
    }

    async createUser(name, phoneNumber, password) {
        const data = { name: name, phoneNumber: phoneNumber, password: password }; // Creating a data object with the provided parameters
        const response = await users.create(data); // Creating a new user record with the provided data
        return response; // Returning the response
    }

    async getUser(id) {
        const response = await users.findOne({ // Finding a user record with the provided phoneNumber
            where: { phoneNumber: id }
        });
        return response; // Returning the response
    }

    async setPincode(phoneNumber, pincode) {
        const response = await users.update({ // Updating the pincode of the user record
            pincode: pincode
        }, {
            where: {
                phoneNumber: phoneNumber
            }
        });
        return response; // Returning the response
    }

    async getPincode(phoneNumber) {
        const response = await users.findOne({ // Finding a user record with the provided phoneNumber
            where: { phoneNumber: phoneNumber }
        });
        return response; // Returning the response
    }
}

module.exports = UserRepository; // Exporting the UserRepository class
