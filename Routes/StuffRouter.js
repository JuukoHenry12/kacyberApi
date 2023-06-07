// Import required modules
const express = require("express");
const {LoginController,RegisterStuffContoller,DeleteStuffContoller,updateStuffController,GetStuffController} = require("../Controller/StuffController");

// Create a router instance
const Stuffrouter = express.Router();

// Define routes
Stuffrouter.post("/login", LoginController);

//GET Stuff
Stuffrouter.get("/get-Stuff", GetStuffController);

//register Stuff
Stuffrouter.post("/register-stuff", RegisterStuffContoller);

//delete Stuff
Stuffrouter.delete("/register-stuff", DeleteStuffContoller);

//Update  Stuff
Stuffrouter.put("/register-stuff", updateStuffController);
// Export the router
module.exports = Stuffrouter;
