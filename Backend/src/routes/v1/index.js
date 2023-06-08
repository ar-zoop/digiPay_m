const express = require('express')

const { InfoController } = require('../../controllers')

const bankRoutes = require('./bank-routes');
const walletRoutes = require('./wallet-routes');

const router = express.Router()

router.get('/info', InfoController.info)

router.use('/banks', bankRoutes);
router.use('/wallets', walletRoutes);

module.exports = router
