// const User = require("../Models/User");
const config = require('../config/config')

const RegisterController = async (req, res) => {
  const {name,email,phone,NinNumber } = req.body;
  try {
    // if (!user) {
    // return res.status(400).send({ error:true, message: 'Please provide user' });
    // }
    config.query("INSERT INTO users SET ? ", {email:email,name:name, phone:phone,NinNumber:NinNumber,}, function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });

     res.status(201).json({ message: "Thank for Joining we be touch " });
  } catch (error) {
    console.error(error.message());
  }
};

module.exports = RegisterController;
