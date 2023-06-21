const express = require("express"); // Importing the express module
const { UserController } = require('../../controllers'); // Importing the UserController from controllers

const router = express.Router(); // Creating an instance of the express Router

router.post('/signin', UserController.signin); // Defining a POST route with the path '/signin' and handling it with the signin function from UserController
router.post('/signup', UserController.signup); // Defining a POST route with the path '/signup' and handling it with the signup function from UserController
router.get('/', UserController.getUser); // Defining a GET route with the path '/' and handling it with the getUser function from UserController
router.patch('/pincode', UserController.setPincode); // Defining a PATCH route with the path '/pincode' and handling it with the setPincode function from UserController
router.get('/pincode', UserController.checkPincode); // Defining a GET route with the path '/pincode' and handling it with the checkPincode function from UserController

module.exports = router; // Exporting the router
