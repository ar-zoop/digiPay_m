const { response } = require('express');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { Twilio } = require('../utils/common')
const {TransactionService}= require ('../services');


async function returnTheResponse(req, res) {
	try {
		const response = await UserService.getPincode(req.body.phoneNumber);
		console.log("transaction-controller returnTheResponse", req.body);
		SuccessResponse.data = req.body;
		return res.status(201).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse);
	}
}

async function twilio(req,res, next) {
	try {
		const body = {
			to: String(req.body.phoneNumber),
			from: '+13612667516',
			message: `Your OTP for payment of Rs. ${req.body.amount} "to"  ${req.body.receiverPhoneNumber} "is 706001.`
		};
		const response = Twilio.sendTextMessage(body);
		// console.log("transaction-controller returnTheResponse", response);
		next()
		// SuccessResponse.data = response;
		// return res.status(201).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse);
	}
}


async function addTransaction(req, res) {
	try {
		console.log("transaction-controller addTransaction", req.body);
		const response = await TransactionService.addTransaction({
			senderPhoneNumber: req.body.phoneNumber, 
			receiverPhoneNumber: req.body.receiverPhoneNumber, 
			amount: req.body.amount});
		SuccessResponse.data = response;
		return res.status(201).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse);
	}
}

module.exports = {
	returnTheResponse,
	twilio,
	addTransaction
}