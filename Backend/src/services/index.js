module.exports = {
    WalletService: require('./wallet-service'), // Exporting the WalletService from wallet-service.js
    UserService: require('./user-service'), // Exporting the UserService from user-service.js
    TransactionService: require('./transaction-service'), // Exporting the TransactionService from transaction-service.js
    IABankService: require('./iabank-service.js'), // Exporting the IABankService from iabank-service.js
    VoucherService: require('./voucher-service.js'), // Exporting the VoucherService from voucher-service.js
    MerchantService: require('./merchant-service.js') // Exporting the MerchantService from merchant-service.js
};
