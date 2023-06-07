// Import required modules
const express = require('express');
// Create a router instance
const Userouter = express.Router();


const WailtListController = require('../Controller/UserController');



// Define routes
Userouter.post('/register',WailtListController);

// Export the router
module.exports = Userouter;