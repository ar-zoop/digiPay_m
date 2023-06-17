const CrudRepository = require("./crud-repository");
const { users } = require("../models");
const { response } = require("express");

class UserRepository extends CrudRepository {
    constructor() {
        super(users);
    }

    async createUser(name, phoneNumber, password) {
        const data = { name: name, phoneNumber:phoneNumber, password:password };
        const response = await users.create(
            data
        );
        return response;
    }

    async getUser(id) {
        const response = await users.findOne(
            {
                where: { phoneNumber: id }
            }
        );
        return response;
    }

    async setPincode(phoneNumber, pincode) {  
        const response = await users.update({
            pincode: pincode
        }, {
            where: {
                phoneNumber: phoneNumber
            }
        })
        return response;
    }

    async getPincode(phoneNumber) {
        // console.log("phone number in user-repo", phoneNumber)
        const response = await users.findOne(
            {
                where: { phoneNumber: phoneNumber }
            }
        );
        // console.log("response in user-repo", response)
        return response;
    }
}


module.exports = UserRepository;
