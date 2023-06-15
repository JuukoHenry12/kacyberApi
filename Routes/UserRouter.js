// Import required modules
const express = require('express');
// Create a router instance
const Userouter = express.Router();


const {WailtListController,GetUserController,DeleteUserContoller}= require('../Controller/UserController');
const authenticateUser = require("../Middleware/Index")

// Define routes
Userouter.post('/waitlist',WailtListController);
// get Users
Userouter.get("/get-users",GetUserController)
Userouter.delete("/delete-user/:id",DeleteUserContoller)

// Export the router
module.exports = Userouter;