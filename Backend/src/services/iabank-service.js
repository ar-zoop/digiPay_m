const { IABankRepository } = require("../repositories");

const iaBankRepo = new IABankRepository();


async function createIssuerBank(data) {
 
    try {
        const response = await iaBankRepo.createBank(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function reduceMoneyFromIssuerBank(data) {
    console.log("service");
    try {
        const response = await iaBankRepo.reduceMoneyFromIssuerBank(data);
   
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function addMoneyToAcquirerBank(data) {

    try {
        const response = await iaBankRepo.addMoneyToAcquirerBank(data);

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = { createIssuerBank, reduceMoneyFromIssuerBank, addMoneyToAcquirerBank };
