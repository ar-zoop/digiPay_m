module.exports = {
    WalletRepository: require('./wallet-repository'), // Exporting the WalletRepository from wallet-repository file
    UserRepository: require('./user-repository'), // Exporting the UserRepository from user-repository file
    TransactionRepository: require('./transaction-repository'), // Exporting the TransactionRepository from transaction-repository file
    IABankRepository: require('./iabank-repository'), // Exporting the IABankRepository from iabank-repository file
    VoucherRepository: require('./voucher-repository'), // Exporting the VoucherRepository from voucher-repository file
    MerchantRepository: require('./merchant-repository') // Exporting the MerchantRepository from merchant-repository file
};
