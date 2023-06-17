const { VoucherRepository } = require("../repositories");
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');
const { response } = require("express");
const { Console } = require("winston/lib/winston/transports");
const { use } = require("../routes");

const voucherRepo = new VoucherRepository();



async function createVoucher(data) {
    try {
     
        const response = await voucherRepo.createVoucher({
            phoneNumber:data.phoneNumber,
            amount:data.amount,
            expiryDate: data.expiryDate,
            purpose:data.purpose,
            isValid:true
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { createVoucher };
