const express = require('express'); // Importing the express module

const { InfoController } = require('../../controllers'); // Importing the InfoController from controllers
const userRoutes = require('./user-routes'); // Importing the userRoutes from user-routes file
const transactionRoutes = require('./transaction-routes'); // Importing the transactionRoutes from transaction-routes file
const iabankRoutes = require('./iabank-routes'); // Importing the iabankRoutes from iabank-routes file
const voucherRoutes = require('./voucher-routes'); // Importing the voucherRoutes from voucher-routes file
const merchantRoutes = require('./merchant-routes'); // Importing the merchantRoutes from merchant-routes file

const router = express.Router(); // Creating an instance of the express Router

router.get('/info', InfoController.info); // Defining a GET route with the path '/info' and handling it with the info function from InfoController

router.use('/users', userRoutes); // Using the userRoutes for paths starting with '/users'
router.use('/transactions', transactionRoutes); // Using the transactionRoutes for paths starting with '/transactions'
router.use('/iabanks', iabankRoutes); // Using the iabankRoutes for paths starting with '/iabanks'
router.use('/vouchers', voucherRoutes); // Using the voucherRoutes for paths starting with '/vouchers'
router.use('/merchants', merchantRoutes); // Using the merchantRoutes for paths starting with '/merchants'

module.exports = router; // Exporting the router

