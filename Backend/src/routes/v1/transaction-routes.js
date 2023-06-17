const express = require("express");
const { TransactionController, UserController, WalletController } = require('../../controllers')
const {TransactionMiddleware}= require('../../middlewares');
const { Transaction } = require("sequelize");


const router = express.Router();

router.get('/', TransactionController.returnTheResponse);

router.post('/checkPincode', UserController.checkPincode, TransactionController.twilio, WalletController.addMoneyToWalletInw2wTransfer, WalletController.deleteNotes,  TransactionController.addTransaction);

// router.post('/payment', TransactionController);
// router.get('/', TransactionController.);
// router.get('/', TransactionController.);

module.exports = router;

