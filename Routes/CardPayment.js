// Import required modules
const express = require('express');
// Create a router instance
const CardPaymentRouter = express.Router();
const authenticateUser = require('../Middleware/Index')
const {  CreateCardPayment,  GetCardpaymentSatus  } = require('../Controller/CardPayment')

CardPaymentRouter.post("/mtn-pay",  CreateCardPayment )
CardPaymentRouter.get("/get-money", GetCardpaymentSatus )

// Export the router
module.exports =CardPaymentRouter;