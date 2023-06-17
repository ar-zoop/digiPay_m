const express = require('express');
const {  IABankMiddleware} = require("../../middlewares")
const { VoucherController } = require("../../controllers")

const router = express.Router();

router.post('/', IABankMiddleware.reduceMoneyFromIssuerBank, VoucherController.createVoucher);
router.patch('/', IABankMiddleware.reduceMoneyFromIssuerBank, VoucherController.createVoucher);

module.exports = router;