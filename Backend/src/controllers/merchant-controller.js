const { MerchantService, VoucherService } = require('../services') // Importing 'MerchantService' and 'VoucherService' from '../services' module
const { SuccessResponse, ErrorResponse } = require('../utils/common') // Importing 'SuccessResponse' and 'ErrorResponse' from '../utils/common' module
const { StatusCodes } = require('http-status-codes') // Importing 'StatusCodes' from 'http-status-codes' module
const { Twilio } = require('../utils/common') // Importing 'Twilio' from '../utils/common' module

// Function for signing up a merchant
async function signup(req, res) {
    try {
        const user = await MerchantService.createUser({
            purpose: req.body.purpose,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        })
        SuccessResponse.data = user
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        console.log(error)
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

// Function for signing in a merchant
async function signin(req, res) {
    try {
        const user = await MerchantService.signin({
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
        })
        SuccessResponse.data = user
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        console.log(error)
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

// Function for sending a text message using Twilio
async function twilio(req, res) {
    try {
        const body = {
            to: String(req.body.userPhoneNumber),
            from: '+13612667516',
            message: `Your OTP for payment of Rs. ${req.body.amount} "to"  ${req.body.phoneNumber} "is 706001.`
        }
        const response = Twilio.sendTextMessage(body)

        SuccessResponse.data = response
        return res.status(201).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res.status(500).json(ErrorResponse)
    }
}

// Function for accepting a payment
async function acceptPayment(req, res, next) {
    try {
        if (req.body.OTPcode == 706001) {
            const user = await VoucherService.updateVoucherBalance({
                phoneNumber: req.body.userPhoneNumber,
                amount: req.body.amount,
                voucherId: req.body.voucherId
            })
            SuccessResponse.data = user
            next()
        }
        else {
            ErrorResponse.error = "OTP incorrect"
            return res
                .status(501)
                .json(ErrorResponse)
        }
    } catch (error) {
        console.log(error)
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

module.exports = {
    signup, // Exporting the 'signup' function
    signin, // Exporting the 'signin' function
    twilio, // Exporting the 'twilio' function
    acceptPayment // Exporting the 'acceptPayment' function
}
