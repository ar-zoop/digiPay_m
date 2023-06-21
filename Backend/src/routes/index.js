const express = require('express'); // Importing the express module
const v1Routes = require('./v1'); // Importing the v1Routes from the v1 file

const router = express.Router(); // Creating an instance of the express Router

router.use('/v1', v1Routes); // Using the v1Routes for paths starting with '/v1'

module.exports = router; // Exporting the router
