const express = require("express"); // Importing the express module
const { IABankController } = require('../../controllers'); // Importing the IABankController from controllers

const router = express.Router(); // Creating an instance of the express Router

router.post('/', IABankController.createIssuerBank); // Defining a POST route with the path '/' and handling it with the createIssuerBank function from IABankController

module.exports = router; // Exporting the router

