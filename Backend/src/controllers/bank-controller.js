const { BankService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common');


async function createBank(req, res) {
    try {
        const response = await BankService.createBank({
            phoneNumber: req.body.phoneNumber,
            balance: req.body.balance
        })
        console.log(response)
        return res.status(201).json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

async function getPhoneNumber(req, res) {
    try {
        const bank = await BankService.getPhoneNumber(req.query.phoneNumber);
        SuccessResponse.data = bank;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

async function updateBalance(req, res) {
    try {
        const bank = await BankService.updateBank({
            phoneNumber:req.body.phoneNumber,
            balance: req.body.balance
        });
    
        SuccessResponse.data = bank;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(500).json(ErrorResponse)
    }
}

async function reduceMoneyFromBank(req,res) {
    try {
        const bank = await BankService.reduceMoneyFromBank(
            req.body.phoneNumber, req.body.data
        );
        SuccessResponse.data = bank;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

module.exports = {
    createBank,
    getPhoneNumber,
    updateBalance,
    reduceMoneyFromBank
}