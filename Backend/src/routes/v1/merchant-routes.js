const express = require("express"); // Importing the express module
const { MerchantController, IABankController, TransactionController } = require('../../controllers'); // Importing the MerchantController, IABankController, and TransactionController from controllers

const router = express.Router(); // Creating an instance of the express Router

router.post('/', MerchantController.signup); // Defining a POST route with the path '/' and handling it with the signup function from MerchantController
router.post('/signin', MerchantController.signin); // Defining a POST route with the path '/signin' and handling it with the signin function from MerchantController
router.post('/addBank', IABankController.createAcquirerBank); // Defining a POST route with the path '/addBank' and handling it with the createAcquirerBank function from IABankController
router.get('/requestOTP', MerchantController.twilio); // Defining a GET route with the path '/requestOTP' and handling it with the twilio function from MerchantController
router.post('/acceptPayment', MerchantController.acceptPayment, IABankController.addMoneyToAcquirerBank, TransactionController.addTransaction); // Defining a POST route with the path '/acceptPayment' and handling it with the acceptPayment function from MerchantController, addMoneyToAcquirerBank function from IABankController, and addTransaction function from TransactionController

module.exports = router; // Exporting the router
