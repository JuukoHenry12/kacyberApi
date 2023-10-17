const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Stuff = require("../Models/StuffModel");

const RegisterStuffContoller = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await Stuff.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new Stuff({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    return  res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error.message());
  }
};

const LoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const stuff = await Stuff.findOne({ email });
    if (!stuff) {
      return res.status(404).json({ message: "Stuff not found" }); // Correct the error message
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, stuff.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Create a JWT token with the user's information
    const token = jwt.sign(
      {
        stuffId: stuff._id, // Use _id instead of id
        email: stuff.email,
      },
      process.env.JWT_SECRET, // Use a correct environment variable for the JWT secret
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      token: token,
      stuffId: stuff._id, // Use _id instead of _id
      message: "User successfully logged in", // Correct the message
      success: true,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ message: "Internal server error" });
  }
};


const DeleteStuffContoller = async (req, res) => {

  try {
    
    await Stuff.findByIdAndDelete(req.params.id,req.body )

    res.send({
        success:true,
        message:"member deleted successfully"
      })

  } catch (error) {
      res.status(500).json({ error: 'Server error' });
  }
};

// Update controller
const updateStuffController = async (req, res) => {
  const { stuffId } = req.params;
  const { email, password } = req.body;

  try {
    // Find the user by ID and update the fields
    const updatedStuff = await Stuff.findByIdAndUpdate(
      stuffId,
      { email, password },
      { new: true }
    );

    if (updatedStuff) {
      return res.status(404).json({ message: "Stuff not found" });
    }

     return res.status(200).json({ message: "Stuffupdated successfully", user: updatedStuff});
  } catch (error) {
     return   res.status(500).json({ message: "Internal server error" });
  }
};

const GetStuffController=async (req,res)=>{
   try{
       const stuff = await  Stuff.find()
       return  res.status(200).send({
           success:true,
           message:stuff
       })
   }catch(error){
      return res.status(500).json({ message: "Internal server error" });
   }
}

const   CountStuffController=async(req,res)=>{
  try {
      const stuff =await  Stuff.find().count()

       return res.status(200).json({
         success:true,
         stuff:stuff
      })

  }catch(error){
     
  }
}

module.exports = {
  LoginController,
  RegisterStuffContoller,
  DeleteStuffContoller,
  updateStuffController,
  GetStuffController,
  CountStuffController
};
