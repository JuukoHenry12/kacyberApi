// Import required modules
const express = require('express');
// Create a router instance
const memberouter = express.Router();
const authenticateUser = require('../Middleware/Index')

const {AddMember,GetMemberController, DeleteMemberContoller,CountMemberController } = require("../Controller/Member")

// Define routes
memberouter.post('/addMember', AddMember);
// get Users
memberouter.get("/get-member",GetMemberController)
memberouter.get("/get-membercount",CountMemberController)
memberouter.delete('/delete-member/:id', DeleteMemberContoller)
// memberouter.put("/update-member/:id",DeleteUserContoller)

// Export the router
module.exports =memberouter;