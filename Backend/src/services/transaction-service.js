var moment = require('moment');
const { TransactionRepository } = require("../repositories");

const transactionRepo = new TransactionRepository();


async function addTransaction (data){
    try {
        var searchStartDate = moment();
        var currentTime = moment();
        const startDate = moment(searchStartDate).format('YYYY-MM-DD');
        var currentTimeString = currentTime.format('HH:mm:ss');
        const obj = { 
            merchantPhoneNumber: data.merchantPhoneNumber,
            userPhoneNumber: data.userPhoneNumber,
            amount: data.amount,
            voucherId: data.voucherId,
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

module.exports = { addTransaction };
