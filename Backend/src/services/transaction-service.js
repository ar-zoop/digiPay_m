var moment = require('moment'); // Importing the moment library for date and time operations
const { TransactionRepository } = require("../repositories"); // Importing the TransactionRepository from repositories
const transactionRepo = new TransactionRepository(); // Creating an instance of the TransactionRepository

async function addTransaction(data) {
    try {
        var searchStartDate = moment(); // Getting the current date and time
        var currentTime = moment();
        const startDate = moment(searchStartDate).format('YYYY-MM-DD'); // Formatting the start date
        var currentTimeString = currentTime.format('HH:mm:ss'); // Formatting the current time
        const obj = { // Creating an object with the transaction details
            merchantPhoneNumber: data.merchantPhoneNumber,
            userPhoneNumber: data.userPhoneNumber,
            amount: data.amount,
            voucherId: data.voucherId,
            date: startDate,
            time: currentTimeString
        };
        const response = await transactionRepo.create(obj); // Creating a new transaction using the TransactionRepository
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

module.exports = { addTransaction }; // Exporting the addTransaction function
