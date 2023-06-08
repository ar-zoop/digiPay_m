    const express = require("express");
    const { BankController } = require('../../controllers')
    const router = express.Router();



    router.post('/', BankController.createBank);
    router.get('/', BankController.getPhoneNumber);
    router.patch('/', BankController.updateBalance);



    module.exports = router;

