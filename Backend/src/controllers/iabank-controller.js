const { response } = require('express');
const { IABankService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createIssuerBank(req, res) {
   
    try {
        const response = await IABankService.createIssuerBank({
            type:"issuerBank",
            phoneNumber: req.body.phoneNumber,
            balance: req.body.balance
        })
        //  console.log(response);
        return res.status(201).json(response)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}
module.exports = {
    createIssuerBank
}