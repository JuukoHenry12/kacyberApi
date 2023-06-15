// Import required modules
const express = require("express");
const {LoginController,RegisterStuffContoller,DeleteStuffContoller,updateStuffController,GetStuffController} = require("../Controller/StuffController");
const authenticateUser=require("../Middleware/Index")

// Create a router instance
const Stuffrouter = express.Router();

//register Stuff
Stuffrouter.post("/register-stuff", RegisterStuffContoller);

// Define routes
Stuffrouter.post("/login", LoginController);

//GET Stuff
Stuffrouter.get("/get-Stuff",GetStuffController);

//delete Stuff
Stuffrouter.delete("/delete-stuff",DeleteStuffContoller);

//Update  Stuff
Stuffrouter.put("/update-stuff", updateStuffController);
// Export the router
module.exports = Stuffrouter;
