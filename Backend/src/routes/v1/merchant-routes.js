const express = require("express");
const { MerchantController } = require('../../controllers')
const { MerchantMiddleware } = require('../../middlewares');
const { IABankController } = require('../../controllers')

const router = express.Router();

router.post('/', MerchantController.signup);
router.post('/signin', MerchantController.signin);
router.post('/addBank', IABankController.createAcquirerBank);
router.get('/requestOTP', MerchantController.twilio);
router.post('/acceptPayment', MerchantController.acceptPayment);

module.exports = router;

