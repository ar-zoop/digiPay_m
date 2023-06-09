const { WalletService, BankService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes')


async function addMoneyToWallet(req, res, next) {
    try {
        const response = await WalletService.addMoneyToWallet(
            req.body.phoneNumber, req.body.data
        )
        if (response) {
            next();
        }
    } catch (error) {
        return res.status(error.statusCodes).json(error)
    }

}

async function getWalletBalance(req, res) {
    try {
        const wallet = await WalletService.getWallet(req.body.phoneNumber);
        SuccessResponse.data = wallet;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

async function getWalletInfo(req, res) {
    try {
        const wallet = await WalletService.getWalletInfo(req.body.phoneNumber);
        SuccessResponse.data = wallet;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

async function getWallet(req, res) {
    try {
        const wallet = await WalletService.getWallet(req.body.phoneNumber);
        SuccessResponse.data = wallet;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

async function checkPhoneNumber(req, res, next) {
    try {
        const wallet = await WalletService.getWallet(req.body.phoneNumber);
        const bank = await BankService.getPhoneNumber(req.body.phoneNumber);
        if (bank.phoneNumber == wallet.phoneNumber) {
            SuccessResponse.data = bank;
        }
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
    next()
}

async function deleteNotes(req, res) {
    try {
        let w = await WalletService.deleteNotes(req.body.phoneNumber, req.body.data);
        SuccessResponse.data = w;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}



module.exports = {
    addMoneyToWallet, getWallet, checkPhoneNumber, deleteNotes, getWalletInfo, getWalletBalance
}