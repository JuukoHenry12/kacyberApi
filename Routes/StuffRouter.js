// Import required modules
const express = require("express");
const {
  LoginController,
  RegisterStuffContoller,
  DeleteStuffContoller,
  updateStuffController,
} = require("../Controller/StuffController");

// Create a router instance
const Stuffrouter = express.Router();

// Define routes
Stuffrouter.post("/login", LoginController);

//GET Stuff
Stuffrouter.get("/getStuff", GetStuffController);

//register Stuff
Stuffrouter.post("/register-stuff", RegisterStuffContoller);

//delete Stuff
Stuffrouter.post("/register-stuff", DeleteStuffContoller);

//Update  Stuff
Stuffrouter.post("/register-stuff", updateStuffController);
// Export the router
module.exports = Userouter;
