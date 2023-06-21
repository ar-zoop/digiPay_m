const { VoucherService } = require('../services'); // Importing VoucherService from services
const { SuccessResponse, ErrorResponse } = require('../utils/common'); // Importing SuccessResponse and ErrorResponse from utils/common
const { StatusCodes } = require('http-status-codes'); // Importing StatusCodes from http-status-codes

async function createVoucher(req, res) {
    try {
        const user = await VoucherService.createVoucher({ // Calling the createVoucher function from VoucherService with the provided voucher data
            phoneNumber: req.body.phoneNumber,
            amount: req.body.amount,
            expiryDate: req.body.expiryDate,
            purpose: req.body.purpose,
        });
        SuccessResponse.data = user; // Setting the user data in the SuccessResponse object
        return res.status(StatusCodes.CREATED).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        console.log(error); // Logging the error
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(error.statusCode).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and the corresponding error status code
    }
}

async function resendVoucher(req, res) {
    try {
        const user = await VoucherService.updateVoucher({ // Calling the updateVoucher function from VoucherService with the provided voucher data
            phoneNumber: req.body.phoneNumber,
            expiryDate: req.body.expiryDate,
            voucherId: req.body.voucherId
        });
        SuccessResponse.data = user; // Setting the user data in the SuccessResponse object
        return res.status(StatusCodes.CREATED).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        console.log(error); // Logging the error
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(error.statusCode).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and the corresponding error status code
    }
}

async function getVoucher(req, res) {
    try {
        const user = await VoucherService.getVoucher({ // Calling the getVoucher function from VoucherService with the provided phone number
            phoneNumber: req.body.phoneNumber
        });
        SuccessResponse.data = user; // Setting the user data in the SuccessResponse object
        return res.status(StatusCodes.CREATED).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        console.log(error); // Logging the error
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(error.statusCode).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and the corresponding error status code
    }
}

module.exports = { createVoucher, resendVoucher, getVoucher }; // Exporting the functions to be used in other files
