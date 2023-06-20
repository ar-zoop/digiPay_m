const { VoucherRepository } = require("../repositories");

const voucherRepo = new VoucherRepository();



async function createVoucher(data) {
    try {
     
        const response = await voucherRepo.createVoucher({
            phoneNumber:data.phoneNumber,
            amount:data.amount,
            expiryDate: data.expiryDate,
            purpose:data.purpose,
            isValid:true
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateVoucher(data) {
    try {
       
        const response = await voucherRepo.updateVoucher(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateVoucherBalance(data) {
    try {
        const response = await voucherRepo.updateVoucherBalance(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getVoucher(data){
    try {
        const response = await voucherRepo.getVoucher(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { createVoucher, updateVoucher, getVoucher, updateVoucherBalance };
