// Define a custom error class that extends the built-in Error class
class AppError extends Error {
    constructor(message, statusCode) {
        // Call the parent constructor with the error message
        super(message);

        // Set the statusCode property of the error
        this.statusCode = statusCode;

        // Set the explanation property of the error (same as message in this case)
        this.explanation = message;
    }
}

// Export the AppError class
module.exports = AppError;
