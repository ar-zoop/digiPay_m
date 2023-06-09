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
    data.balance=Number(data.balance)

    try {
        const user = await bankRepo.getBank
        (data.phoneNumber, data.balance);
      
        if(!user){
            throw new AppError("User does not exist", StatusCodes.NOT_FOUND);
        }
        user.balance += data.balance ;
        const response = await bankRepo.updateBalance(data.phoneNumber, user);
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
    try {
        const user = await bankRepo.getBank(id);
        if (!user ) {
            throw new AppError("User does not exist", StatusCodes.NOT_FOUND);
        }
        if (user.balance == 0)
        {
            throw new AppError("Not sufficient money in bank", StatusCodes.EXPECTATION_FAILED);
        }
        let totalBalance = 0;
        for (const note of Object.values(data)) {
            for (let i = 0; i < note.numberOfNotes; i++) {
                // console.log("inside loop");
                totalBalance+=Number(note.value);
            }
        }
        user.balance -= totalBalance;
        const response = await bankRepo.updateBalance(id, user);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { createBank, addMoneyToBank, getBank, getPhoneNumber, reduceMoneyFromBank };
