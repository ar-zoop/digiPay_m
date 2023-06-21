// Import the 'express' module
const express = require('express')

// Import the 'ServerConfig' object from the './config' module
const { ServerConfig } = require('./config')

// Import the 'apiRoutes' module that contains the API routes
const apiRoutes = require('./routes')

// Import the 'cors' module
const cors = require("cors");

// Create an instance of the Express application
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Enable Cross-Origin Resource Sharing (CORS)
app.use('/api', cors(), apiRoutes)

// Start the server and listen on the specified port
app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`)
})
