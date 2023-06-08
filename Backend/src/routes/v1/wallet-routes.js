const express = require("express");
const { WalletController, BankController } = require('../../controllers')
const { BankMiddleware } = require("../../middlewares")
const router = express.Router();

router.post('/', BankMiddleware.checkPhoneNumber, WalletController.addMoneyToWallet, BankController.reduceMoneyFromBank);
router.patch('/', WalletController.deleteNotes);
router.get('/', WalletController.getWalletInfo);



module.exports = router;

