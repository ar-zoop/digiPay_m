const express = require("express");
const { WalletController, BankController } = require('../../controllers')
const { BankMiddleware } = require("../../middlewares")
const router = express.Router();

// router.post('/', BankMiddleware.checkPhoneNumber, WalletController.addMoneyToWallet, BankController.reduceMoneyFromBank); 
router.post('/', BankController.reduceMoneyFromBank, WalletController.addMoneyToWallet);
router.patch('/', WalletController.deleteNotes);
router.get('/', WalletController.getWalletInfo);
router.get('/walletBalance', WalletController.getWalletBalance);
router.get('/RBIinfo', WalletController.getAllNotesWithUsers);

module.exports = router;


