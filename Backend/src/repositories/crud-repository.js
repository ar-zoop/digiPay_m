const { StatusCodes } = require('http-status-codes'); // Importing StatusCodes from http-status-codes
const { Logger } = require('../config'); // Importing Logger from config
const AppError = require('../utils/errors/app-error'); // Importing AppError from utils/errors/app-error

class CrudRepository {
	constructor(model) {
		this.model = model; // Initializing the model
	}

	async create(data) {
		const response = await this.model.create(data); // Creating a new record with the provided data
		return response; // Returning the response
	}

	async destroy(data) {
		const response = await this.model.destroy({ // Deleting a record with the provided ID
			where: {
				id: data
			}
		});
		if (!response) {
			throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND); // Throwing an error if the record is not found
		}
		return response; // Returning the response
	}

	async get(data) {
		const response = await this.model.findByPk(data); // Retrieving a record with the provided ID
		if (!response) {
			throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND); // Throwing an error if the record is not found
		}
		return response; // Returning the response
	}

	async getAll() {
		const response = await this.model.findAll(); // Retrieving all records
		return response; // Returning the response
	}

	async update(id, data) { // Updating a record with the provided ID and data
		const response = await this.model.update(data, {
			where: {
				id: id
			}
		});
		return response; // Returning the response
	}
}

module.exports = CrudRepository; // Exporting the CrudRepository class
