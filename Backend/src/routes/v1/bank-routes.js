const express = require("express");
const { BankController, WalletController } = require('../../controllers')
const { BankMiddleware } = require("../../middlewares")

const router = express.Router();
router.post('/', BankController.createBank);
router.get('/', BankController.getPhoneNumber);
// router.patch('/', BankController.addMoneyToBank);

// router.patch('/', BankMiddleware.checkPhoneNumber, BankController.addMoneyToBank, WalletController.deleteNotes); 
router.patch('/', WalletController.deleteNotes,BankController.addMoneyToBank); 

// router.patch('/', WalletController.reduceMoneyFromWallet, BankController.addMoneyToBank);



module.exports = router;

