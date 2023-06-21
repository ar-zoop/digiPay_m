const { Auth } = require('../utils/common'); // Importing the Auth module for authentication
const { UserRepository } = require("../repositories"); // Importing the UserRepository from repositories
const AppError = require("../utils/errors/app-error"); // Importing the AppError class for custom errors
const { StatusCodes } = require("http-status-codes"); // Importing the StatusCodes for HTTP status codes
const userRepo = new UserRepository(); // Creating an instance of the UserRepository

async function createUser(data) {
    try {
        const response = await userRepo.createUser(data.name, data.phoneNumber, data.password); // Creating a new user using the UserRepository
        return response; // Returning the response
    } catch (error) {
        console.log(error.name); // Logging the error name
        if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST); // Throwing a custom AppError with explanation and status code
        }
        throw new AppError('Cannot create a new user object', StatusCodes.INTERNAL_SERVER_ERROR); // Throwing a custom AppError for internal server error
    }
}

async function getUser(id) {
    try {
        const response = await userRepo.getUser(id); // Retrieving the user from the UserRepository
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function signin(data) {
    try {
        const user = await userRepo.getUser(data.phoneNumber); // Retrieving the user from the UserRepository
        if (!user) {
            throw new AppError('No user found for the given phone number', StatusCodes.NOT_FOUND); // Throwing a custom AppError for user not found
        }
        const passwordMatch = Auth.checkPassword(data.password, user.password); // Checking if the provided password matches the stored password
        if (!passwordMatch) {
            throw new AppError('Invalid password', StatusCodes.BAD_REQUEST); // Throwing a custom AppError for invalid password
        }
        const jwt = Auth.createToken({ id: user.phoneNumber }); // Creating a JWT token for authentication
        return jwt; // Returning the JWT token
    } catch (error) {
        if (error instanceof AppError) throw error;
        console.log(error);
        throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR); // Throwing a custom AppError for internal server error
    }
}

async function isAuthenticated(token) {
    try {
        if (!token) {
            throw new AppError('Missing JWT token', StatusCodes.BAD_REQUEST); // Throwing a custom AppError for missing JWT token
        }
        const response = verifyToken(token); // Verifying the JWT token
        const user = await userRepo.get(response.id); // Retrieving the user from the UserRepository
        if (!user) {
            throw new AppError('No user found', StatusCodes.NOT_FOUND); // Throwing a custom AppError for user not found
        }
        return user.id; // Returning the user ID
    } catch (error) {
        if (error instanceof AppError) throw error;
        if (error.name == 'JsonWebTokenError') {
            throw new AppError('Invalid JWT token', StatusCodes.BAD_REQUEST); // Throwing a custom AppError for invalid JWT token
        }
        if (error.name == 'TokenExpiredError') {
            throw new AppError('JWT token expired', StatusCodes.BAD_REQUEST); // Throwing a custom AppError for expired JWT token
        }
        console.log(error);
        throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR); // Throwing a custom AppError for internal server error
    }
}

async function setPincode(id, pincode) {
    try {
        const response = await userRepo.setPincode(id, pincode); // Setting the pincode for the user
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

async function getPincode(id) {
    try {
        const response = await userRepo.getPincode(id); // Retrieving the pincode for the user
        return response; // Returning the response
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

module.exports = { createUser, getUser, getPincode, setPincode, signin, isAuthenticated }; // Exporting the createUser, getUser, getPincode, setPincode, signin, and isAuthenticated functions
