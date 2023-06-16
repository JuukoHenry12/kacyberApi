// Import required modules
const express = require('express');
// Create a router instance
const memberouter = express.Router();
const authenticateUser = require('../Middleware/Index')

// const {WailtListController,GetUserController,DeleteUserContoller}= require('../Controller/UserController');
const {AddMember,GetMemberController,DeleteUserContoller} = require("../Controller/Member")

// Define routes
memberouter.post('/addMember', authenticateUser, AddMember);
// get Users
memberouter.get("/get-member", authenticateUser,GetMemberController)
memberouter.delete("/delete-member/:id", authenticateUser,DeleteUserContoller)
// memberouter.put("/update-member/:id",DeleteUserContoller)

// Export the router
module.exports =memberouter;