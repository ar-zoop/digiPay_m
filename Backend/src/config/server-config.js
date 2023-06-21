const dotenv = require('dotenv')

dotenv.config() // Load environment variables from a .env file

module.exports = {
    PORT: process.env.PORT, // Port number retrieved from environment variable
    SALT_ROUNDS: process.env.SALT_ROUNDS, // Number of salt rounds for password hashing
    JWT_EXPIRY: process.env.JWT_EXPIRY, // Expiry time for JSON Web Tokens (JWT)
    JWT_SECRET: process.env.JWT_SECRET // Secret key for JWT signing and verification
}
