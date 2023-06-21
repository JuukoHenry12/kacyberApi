const express = require('express');
// Create a router instance
const Userouter = express.Router();
const authenticateUser = require('../Middleware/Index')
const {WailtListController,GetUserController,DeleteUserContoller,EditUserController,CountUserController }= require('../Controller/UserController');


// Define routes
Userouter.post('/waitlist',WailtListController);
// get Users
Userouter.get("/get-users", authenticateUser,GetUserController)
Userouter.get("/get-users-count",CountUserController)
Userouter.delete("/delete-user/:id", authenticateUser,DeleteUserContoller)
Userouter.put("/update-user/:id", authenticateUser,EditUserController )

// Export the router
module.exports = Userouter;