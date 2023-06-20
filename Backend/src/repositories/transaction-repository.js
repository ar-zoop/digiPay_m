const CrudRepository = require("./crud-repository");
const { transactions } = require("../models");

class TransactionRepository extends CrudRepository {
    constructor() {
        super(transactions);
    }

    async create(data) {
        const response = await transactions.create(
            data
        );
        return response;
    }

}

module.exports = TransactionRepository;
