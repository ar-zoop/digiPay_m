const { BankRepository } = require("../repositories");
const AppError= require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
const { response } = require("express");
const { Console } = require("winston/lib/winston/transports");
const { use } = require("../routes");

const bankRepo = new BankRepository();


async function createBank(data) {
    try {
        const response = await bankRepo.createBank(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function addMoneyToBank(data) {
    data.phoneNumber=Number(data.phoneNumber)
    // data.balance=Number(data.balance)

    try {
        const user = await bankRepo.getBank
        (data.phoneNumber);
      
        if(!user){
            throw new AppError("User does not exist", StatusCodes.NOT_FOUND);
        }
        let sum=0;
        console.log(data.data);
        for (const note of Object.values(data.data)) {           
            // console.log("inside loop");
            sum += Number(note.value) * Number( note.numberOfNotes);
            
        }
        console.log("sum in bank-service", sum);
        user.balance=Number(user.balance);
        console.log("user.balance in bank-service", user.balance, typeof(user.balance));
        user.balance += sum;
        console.log("user in bank-servive after", user)
        const response = await bankRepo.updateBalance(data.phoneNumber, user.balance);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getBank(id, data) {
    try {
        const response = await bankRepo.getBank(id, data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPhoneNumber(id) {
    try {
        const response = await bankRepo.getPhoneNumber(id);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function reduceMoneyFromBank(id, data){
    console.log("in erducemonryfrombank in bank service", id, data)
    try {
        const user = await bankRepo.getBank(id);
        console.log("user in bank service", user)
        if (!user ) {
            throw new AppError("User does not exist", StatusCodes.NOT_FOUND);
        }
        if (user.balance == 0)
        {
            throw new AppError("Not sufficient money in bank", StatusCodes.EXPECTATION_FAILED);
        }
        let totalBalance = 0;
        for (const note of Object.values(data)) {
            // for (let i = 0; i < note.numberOfNotes; i++) {
                // console.log("inside loop");
                totalBalance+=Number(note.value) * Number(note.numberOfNotes);
            // }
        }
        user.balance -= totalBalance;
        console.log(user.balance)
        const response = await bankRepo.updateBalance(id, user.balance);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}



module.exports = { createBank, addMoneyToBank, getBank, getPhoneNumber, reduceMoneyFromBank };
