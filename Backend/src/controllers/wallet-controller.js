const { WalletService } = require('../services'); // Importing WalletService from services
const { SuccessResponse, ErrorResponse } = require('../utils/common'); // Importing SuccessResponse and ErrorResponse from utils/common

async function addMoneyToWallet(req, res) {
    try {
        const response = await WalletService.addMoneyToWallet( // Calling the addMoneyToWallet function from WalletService with the provided phone number and data
            req.body.phoneNumber, req.body.data
        );
        if (response) {
            return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
        }
    } catch (error) {
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

async function addMoneyToWalletInw2wTransfer(req, res, next) {
    try {
        const response = await WalletService.addMoneyToWallet( // Calling the addMoneyToWallet function from WalletService with the provided receiver phone number and data
            req.body.receiverPhoneNumber, req.body.data
        );
        if (response) {
            next(); // Calling the next middleware function
        }
    } catch (error) {
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

async function getWalletBalance(req, res) {
    try {
        const wallet = await WalletService.getWalletBalance(req.body.phoneNumber); // Calling the getWalletBalance function from WalletService with the provided phone number
        if (!wallet) {
            SuccessResponse.data = 0; // Setting the wallet balance as 0 in the SuccessResponse object
            return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
        }
        SuccessResponse.data = wallet; // Setting the wallet balance in the SuccessResponse object
        return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

async function getWalletInfo(req, res) {
    try {
        const wallet = await WalletService.getWalletInfo(req.body.phoneNumber); // Calling the getWalletInfo function from WalletService with the provided phone number
        SuccessResponse.data = wallet; // Setting the wallet information in the SuccessResponse object
        return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

async function getWallet(req, res) {
    try {
        const wallet = await WalletService.getWallet(req.body.phoneNumber); // Calling the getWallet function from WalletService with the provided phone number
        SuccessResponse.data = wallet; // Setting the wallet information in the SuccessResponse object
        return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

async function deleteNotes(req, res, next) {
    try {
        let w = await WalletService.deleteNotes(req.body.phoneNumber, req.body.data); // Calling the deleteNotes function from WalletService with the provided phone number and data
        SuccessResponse.data = w; // Setting the deleted notes in the SuccessResponse object
        next(); // Calling the next middleware function
    } catch (error) {
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

async function reduceMoneyFromWallet(req, res) {
    try {
        let w = await WalletService.deleteNotes(req.body.phoneNumber, req.body.data); // Calling the deleteNotes function from WalletService with the provided phone number and data
        SuccessResponse.data = w; // Setting the deleted notes in the SuccessResponse object
        return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

async function getAllNotesWithUsers(req, res) {
    try {
        let w = await WalletService.getAllNotesWithUsers(); // Calling the getAllNotesWithUsers function from WalletService
        SuccessResponse.data = w; // Setting the notes with users data in the SuccessResponse object
        return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

module.exports = {
    addMoneyToWallet,
    getWallet,
    deleteNotes,
    getWalletInfo,
    getWalletBalance,
    reduceMoneyFromWallet,
    addMoneyToWalletInw2wTransfer,
    getAllNotesWithUsers
}; // Exporting the functions to be used in other files
