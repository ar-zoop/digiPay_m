const { response } = require('express'); // Importing 'response' object from 'express' module
const { IABankService } = require('../services'); // Importing 'IABankService' from '../services' module
const { SuccessResponse, ErrorResponse } = require('../utils/common'); // Importing 'SuccessResponse' and 'ErrorResponse' from '../utils/common' module

async function createIssuerBank(req, res) {

    try {
        const response = await IABankService.createIssuerBank({
            type: "issuerBank",
            phoneNumber: req.body.phoneNumber,
            balance: req.body.balance
        });
        return res.status(201).json(response); // Sending a JSON response with status 201
    } catch (error) {
        console.log(error);
        return res.status(500).json(error); // Sending a JSON response with status 500
    }
}

async function createAcquirerBank(req, res) {

    try {
        const response = await IABankService.createIssuerBank({
            type: "acquirerBank",
            phoneNumber: req.body.phoneNumber,
            balance: req.body.balance
        });
        return res.status(201).json(response); // Sending a JSON response with status 201
    } catch (error) {
        console.log(error);
        return res.status(500).json(error); // Sending a JSON response with status 500
    }
}

async function addMoneyToAcquirerBank(req, res, next) {
    try {
        const bank = await IABankService.addMoneyToAcquirerBank({
            phoneNumber: req.body.phoneNumber,
            amount: req.body.amount
        });
        SuccessResponse.data = bank;
        // return res.status(201).json(SuccessResponse)

        if (bank) {
            next();
        }
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse); // Sending a JSON response with status 500
    }
}

module.exports = {
    createIssuerBank, // Exporting the 'createIssuerBank' function
    createAcquirerBank, // Exporting the 'createAcquirerBank' function
    addMoneyToAcquirerBank // Exporting the 'addMoneyToAcquirerBank' function
}
