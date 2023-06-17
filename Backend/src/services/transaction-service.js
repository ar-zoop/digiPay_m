var moment = require('moment');
const { TransactionRepository } = require("../repositories");
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');
const { response } = require("express");
const { Console } = require("winston/lib/winston/transports");
const { use } = require("../routes");

const transactionRepo = new TransactionRepository();

async function returnTheResponse(body) {
    try {
        // console.log("transaction-service returnTheResponse", body);
        return body;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function addTransaction (data){
    try {
        var searchStartDate = moment();
        var currentTime = moment();
        const startDate = moment(searchStartDate).format('YYYY-MM-DD');
        var currentTimeString = currentTime.format('HH:mm:ss');
        // console.log(currentTimeString);
        const obj = { 
            recieverPhoneNumber: data.receiverPhoneNumber,
            senderPhoneNumber: data.senderPhoneNumber,
            amount: data.amount,
            date: startDate,
            time: currentTimeString
        };
        const response = await transactionRepo.create(obj);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { returnTheResponse, addTransaction };
