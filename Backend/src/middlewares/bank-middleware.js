const { BankController } = require('../controllers')
const { WalletService, BankService } = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function checkPhoneNumber(req, res, next) {
   
   try {
       const wallet = await WalletService.getWallet(req.body.phoneNumber);
       const bank = await BankService.getPhoneNumber(req.body.phoneNumber);
       if (bank.phoneNumber == wallet.phoneNumber) {
           next()
       }
   } catch (error) {
       ErrorResponse.error = error;
       return res.status(500).json(ErrorResponse)
   }   
}
module.exports = {
    checkPhoneNumber,    
}