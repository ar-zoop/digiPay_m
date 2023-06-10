const {  UserService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes')

async function createUser(req, res) {
    try {
        const response = await UserService.createUser({
            name : req.body.name,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        })
        console.log(response)
        return res.status(201).json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

async function getUser(req, res) {
    try {
        const response = await UserService.getUser(req.body.phoneNumber);
        SuccessResponse.data = response;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

async function setPincode(req, res) {
    try {
        const response = await UserService.setPincode(req.body.phoneNumber, req.body.pincode);
        SuccessResponse.data = response;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

async function getPincode(req, res) {
    try {
        const response = await UserService.getPincode(req.body.phoneNumber);
        SuccessResponse.data = response;
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

async function checkPincode(req,res){
    try{
        const response= await UserService.getPincode(req.body.phoneNumber);
        
        if (response.pincode == req.body.pincode) {
            SuccessResponse.data = response;
            return res.status(201).json(SuccessResponse)

        }
        else{
            ErrorResponse.error = error;
            return res.status(500).json(ErrorResponse)
        }
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(500).json(ErrorResponse)
    }
}

module.exports = { createUser, getUser, setPincode, getPincode, checkPincode };