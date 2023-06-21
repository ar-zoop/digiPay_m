const CrudRepository = require("./crud-repository"); // Importing the CrudRepository class
const { transactions } = require("../models"); // Importing the transactions model

class TransactionRepository extends CrudRepository {
    constructor() {
        super(transactions); // Calling the constructor of the parent CrudRepository class with the transactions model
    }

    async create(data) {
        const response = await transactions.create(data); // Creating a new transaction record with the provided data
        return response; // Returning the response
    }
}

module.exports = TransactionRepository; // Exporting the TransactionRepository class
