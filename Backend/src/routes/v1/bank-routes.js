const express = require("express");
const { BankController, WalletController } = require('../../controllers')
const { BankMiddleware } = require("../../middlewares")

const router = express.Router();



    router.post('/', BankController.createBank);
    router.get('/', BankController.getPhoneNumber);
// router.patch('/', BankController.addMoneyToBank);

router.patch('/', BankMiddleware.checkPhoneNumber, BankController.addMoneyToBank, WalletController.deleteNotes); 



    module.exports = router;

