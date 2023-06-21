const express = require("express"); // Importing the express module
const { TransactionController, UserController, WalletController } = require('../../controllers'); // Importing the TransactionController, UserController, and WalletController from controllers

const router = express.Router(); // Creating an instance of the express Router

router.post('/checkPincode', UserController.checkPincode, TransactionController.twilio, WalletController.addMoneyToWalletInw2wTransfer, WalletController.deleteNotes, TransactionController.addTransaction);
// Defining a POST route with the path '/checkPincode' and handling it with multiple functions from UserController, TransactionController, and WalletController

module.exports = router; // Exporting the router
