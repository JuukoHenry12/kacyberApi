// Import required modules
const express = require('express');
const RegisterController= require('../Controller/UserController');

// Create a router instance
const Userouter = express.Router();

// Define routes
Userouter.post('/register',RegisterController);

// Export the router
module.exports =  Userouter;