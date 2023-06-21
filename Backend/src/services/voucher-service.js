const { VoucherRepository } = require("../repositories"); // Importing the VoucherRepository from repositories
const voucherRepo = new VoucherRepository(); // Creating an instance of the VoucherRepository

async function createVoucher(data) {
    try {
        const response = await voucherRepo.createVoucher({
            phoneNumber: data.phoneNumber,
            amount: data.amount,
            expiryDate: data.expiryDate,
            purpose: data.purpose,
            isValid: true
        }); // Creating a new voucher using the VoucherRepository
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function updateVoucher(data) {
    try {
        const response = await voucherRepo.updateVoucher(data); // Updating the voucher using the VoucherRepository
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function updateVoucherBalance(data) {
    try {
        const response = await voucherRepo.updateVoucherBalance(data); // Updating the voucher balance using the VoucherRepository
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function getVoucher(data) {
    try {
        const response = await voucherRepo.getVoucher(data); // Retrieving the vouchers using the VoucherRepository
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

module.exports = { createVoucher, updateVoucher, getVoucher, updateVoucherBalance }; // Exporting the createVoucher, updateVoucher, getVoucher, and updateVoucherBalance functions
