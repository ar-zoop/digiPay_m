const { UserService } = require('../services'); // Importing UserService from services
const { SuccessResponse, ErrorResponse } = require('../utils/common'); // Importing SuccessResponse and ErrorResponse from utils/common
const { StatusCodes } = require('http-status-codes'); // Importing StatusCodes from http-status-codes

async function signup(req, res) {
    try {
        const user = await UserService.createUser({ // Calling the createUser function from UserService with the provided user data
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        });
        SuccessResponse.data = user; // Setting the user data in the SuccessResponse object
        return res.status(StatusCodes.CREATED).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        console.log(error); // Logging the error
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(error.statusCode).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and the corresponding error status code
    }
}

async function signin(req, res) {
    try {
        const user = await UserService.signin({ // Calling the signin function from UserService with the provided user credentials
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        });
        SuccessResponse.data = user; // Setting the user data in the SuccessResponse object
        return res.status(StatusCodes.CREATED).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        console.log(error); // Logging the error
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(error.statusCode).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and the corresponding error status code
    }
}

async function getUser(req, res) {
    try {
        const response = await UserService.getUser(req.body.phoneNumber); // Calling the getUser function from UserService with the provided phone number
        SuccessResponse.data = response; // Setting the user data in the SuccessResponse object
        return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

async function setPincode(req, res) {
    try {
        const response = await UserService.setPincode(req.body.phoneNumber, req.body.pincode); // Calling the setPincode function from UserService with the provided phone number and pin code
        SuccessResponse.data = response; // Setting the response in the SuccessResponse object
        return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

async function getPincode(req, res) {
    try {
        const response = await UserService.getPincode(req.body.phoneNumber); // Calling the getPincode function from UserService with the provided phone number
        SuccessResponse.data = response; // Setting the response in the SuccessResponse object
        return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

async function checkPincode(req, res) {
    try {
        const response = await UserService.getPincode(req.body.phoneNumber); // Calling the getPincode function from UserService with the provided phone number
        SuccessResponse.data = response; // Setting the response in the SuccessResponse object
        return res.status(201).json(SuccessResponse); // Returning a JSON response with the SuccessResponse object and a HTTP status of 201 (Created)
    } catch (error) {
        ErrorResponse.error = error; // Setting the error in the ErrorResponse object
        return res.status(500).json(ErrorResponse); // Returning a JSON response with the ErrorResponse object and a HTTP status of 500 (Internal Server Error)
    }
}

module.exports = { getUser, setPincode, getPincode, checkPincode, signin, signup }; // Exporting the functions to be used in other files
