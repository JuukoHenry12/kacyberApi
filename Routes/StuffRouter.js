// Import required modules
const express = require("express");
const {LoginController,RegisterStuffContoller,DeleteStuffContoller,updateStuffController,GetStuffController,
    CountStuffController
} = require("../Controller/StuffController");
const authenticateUser=require("../Middleware/Index")

// Create a router instance
const Stuffrouter = express.Router();

//register Stuff
Stuffrouter.post("/register-stuff", RegisterStuffContoller);

// Define routes
Stuffrouter.post("/login", LoginController);

//GET Stuff
Stuffrouter.get("/get-Stuff", authenticateUser,GetStuffController);

//delete Stuff
Stuffrouter.delete("/delete-stuff", authenticateUser,DeleteStuffContoller);

//get count
Stuffrouter.get("/get-stuffcount", CountStuffController)

//Update  Stuff
Stuffrouter.put("/update-stuff", authenticateUser, updateStuffController);
// Export the router
module.exports = Stuffrouter;
