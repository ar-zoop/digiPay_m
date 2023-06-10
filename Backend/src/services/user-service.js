const { UserRepository } = require("../repositories");

const { response } = require("express");

const userRepo = new UserRepository();

async function createUser(data) {
    try {
        const response = await userRepo.createUser(data.name, data.phoneNumber, data.password);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getUser(id) {
    try {
        const response = await userRepo.getUser(id);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function setPincode(id, pincode) {
    try {
        const response = await userRepo.setPincode(id, pincode);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPincode(id) {
    try {
        const response = await userRepo.getPincode(id);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { createUser, getUser, getPincode, setPincode };
