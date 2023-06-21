const bcrypt = require('bcrypt'); // Importing the bcrypt library for password hashing
const jwt = require('jsonwebtoken'); // Importing the jsonwebtoken library for token generation
const { ServerConfig } = require('../../config'); // Importing the server configuration

function checkPassword(plainPassword, encryptedPassword) {
    try {
        return bcrypt.compareSync(plainPassword, encryptedPassword); // Compares the plain password with the encrypted password
    } catch (error) {
        console.log(error); // Logging the error
        throw error; // Throwing the error
    }
}

function createToken(input) {
    try {
        return jwt.sign(input, ServerConfig.JWT_SECRET, { expiresIn: ServerConfig.JWT_EXPIRY }); // Creates a JWT token using the input and server configuration
    } catch (error) {
        throw error; // Throwing the error
    }
}

module.exports = {
    checkPassword,
    createToken
}; // Exporting the functions
