const CrudRepository = require("./crud-repository");
const { Transactions } = require("../models");
const { response } = require("express");

class TransactionRepository extends CrudRepository {
    constructor() {
        super(Transactions);
    }

    async create(data) {
        const response = await Transactions.create(
            data
        );
        return response;
    }

}

module.exports = TransactionRepository;
