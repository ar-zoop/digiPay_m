const { SuccessResponse, ErrorResponse } = require('../utils/common'); // Importing 'SuccessResponse' and 'ErrorResponse' from '../utils/common' module
const { Twilio } = require('../utils/common'); // Importing 'Twilio' from '../utils/common' module
const { TransactionService } = require('../services'); // Importing 'TransactionService' from '../services' module

// Function for returning the response
async function returnTheResponse(req, res) {
	try {
		const response = await UserService.getPincode(req.body.phoneNumber); // Get pincode for a phone number
		SuccessResponse.data = req.body;
		return res.status(201).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse);
	}
}

// Function for sending a text message using Twilio
async function twilio(req, res, next) {
	try {
		const body = {
			to: String(req.body.phoneNumber),
			from: '+13612667516',
			message: `Your OTP for payment of Rs. ${req.body.amount} "to"  ${req.body.receiverPhoneNumber} "is 706001.`
		};
		const response = Twilio.sendTextMessage(body);
		next();
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse);
	}
}

// Function for adding a transaction
async function addTransaction(req, res) {
	try {
		const response = await TransactionService.addTransaction({
			merchantPhoneNumber: req.body.phoneNumber,
			userPhoneNumber: req.body.userPhoneNumber,
			amount: req.body.amount,
			voucherId: req.body.voucherId
		});
		SuccessResponse.data = response;
		return res.status(201).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse);
	}
}

module.exports = {
	returnTheResponse, // Exporting the 'returnTheResponse' function
	twilio, // Exporting the 'twilio' function
	addTransaction // Exporting the 'addTransaction' function
}
