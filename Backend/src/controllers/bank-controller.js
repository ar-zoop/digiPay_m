const { response } = require('express');
const { BankService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createBank(req, res) {
    try {
        const response = await BankService.createBank({
            phoneNumber: req.body.phoneNumber,
            balance: req.body.balance
        })
        console.log(response);
        return res.status(201).json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

async function getPhoneNumber(req, res) {
    try {
        const bank = await BankService.getPhoneNumber(req.body.phoneNumber);
        SuccessResponse.data = bank;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

async function addMoneyToBank(req, res, next) {
    try {
        const bank = await BankService.addMoneyToBank({
            phoneNumber: req.body.phoneNumber,
            data: req.body.data
        });
        SuccessResponse.data = bank;
        // return res.status(201).json(SuccessResponse)
        console.log(bank)
        if (bank) {
            return res.status(201).json(SuccessResponse)
        }
    } catch (error) {
        ErrorResponse.error = error
        return res.status(500).json(ErrorResponse)
    }
}

async function reduceMoneyFromBank(req, res, next) {
    console.log("in reducemoneyfrombank in bank controller",req.body.phoneNumber, req.body.data)
    try {
        const bank = await BankService.reduceMoneyFromBank(
            req.body.phoneNumber, req.body.data
        );
        SuccessResponse.data = bank;
        next();
        // return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

module.exports = {
    createBank,
    getPhoneNumber,
    addMoneyToBank,
    reduceMoneyFromBank
}