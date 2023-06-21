const express = require('express'); // Importing the express module
const { IABankMiddleware } = require("../../middlewares"); // Importing the IABankMiddleware from middlewares
const { VoucherController } = require("../../controllers"); // Importing the VoucherController from controllers

const router = express.Router(); // Creating an instance of the express Router

router.post('/', IABankMiddleware.reduceMoneyFromIssuerBank, VoucherController.createVoucher);
// Defining a POST route with the path '/' and handling it with the reduceMoneyFromIssuerBank middleware from IABankMiddleware and the createVoucher function from VoucherController

router.patch('/', VoucherController.resendVoucher);
// Defining a PATCH route with the path '/' and handling it with the resendVoucher function from VoucherController

router.get('/', VoucherController.getVoucher);
// Defining a GET route with the path '/' and handling it with the getVoucher function from VoucherController

module.exports = router; // Exporting the router
