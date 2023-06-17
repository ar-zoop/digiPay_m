const express = require('express')

const { InfoController } = require('../../controllers')

const bankRoutes = require('./bank-routes');
const walletRoutes = require('./wallet-routes');
const userRoutes= require('./user-routes');
const transactionRoutes= require('./transaction-routes');
const iabankRoutes= require('./iabank-routes');
const voucherRoutes= require('./voucher-routes');

const router = express.Router()

router.get('/info', InfoController.info);

// router.use('/banks', bankRoutes);
// router.use('/wallets', walletRoutes);
router.use('/users', userRoutes);
router.use('/transactions', transactionRoutes );
router.use('/iabanks', iabankRoutes);
router.use('/vouchers', voucherRoutes);
module.exports = router
