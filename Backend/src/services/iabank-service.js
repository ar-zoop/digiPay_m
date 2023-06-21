const { IABankRepository } = require("../repositories"); // Importing the IABankRepository from repositories

const iaBankRepo = new IABankRepository(); // Creating an instance of the IABankRepository

async function createIssuerBank(data) {
    try {
        const response = await iaBankRepo.createBank(data); // Creating a new issuer bank using the IABankRepository
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function reduceMoneyFromIssuerBank(data) {
    console.log("service");
    try {
        const response = await iaBankRepo.reduceMoneyFromIssuerBank(data); // Reducing money from the issuer bank using the IABankRepository
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function addMoneyToAcquirerBank(data) {
    try {
        const response = await iaBankRepo.addMoneyToAcquirerBank(data); // Adding money to the acquirer bank using the IABankRepository
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

module.exports = { createIssuerBank, reduceMoneyFromIssuerBank, addMoneyToAcquirerBank };
// Exporting the functions as an object
