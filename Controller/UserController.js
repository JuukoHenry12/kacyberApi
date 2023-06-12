const User = require('../Models/User')
const WailtListController = async (req, res) => {
  const {firstname,surname, phoneNumber,email, selectedOption, NinNumber} = req.body;
  try {
      // Check if user already exists
      const existingUser = await User.findOne({email});

      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }

      // Create a new user
      const newUser = new  User({
        firstname,
        surname,
        email,
        phoneNumber,
        selectedOption,
        NinNumber,
      });
   
      // Save the user to the database
     await newUser.save();
     return  res.status(200).json({ message: "Thank for Joining we be touch ",
       user: newUser 
    
    });
  } catch (error) {
       return console.log(error)
  }
};

const GetUserController=async(req,res)=>{
   try {
       const user =await User.find().sort({createdAt:-1})

       return res.status(200).json({
          success:true,
          user:user
       })

   }catch(error){
      
   }
}

const DeleteUserContoller = async (req, res) => {

  try {
        const deletedUser= await User.findByIdAndDelete(req.params.id)

        if (!deletedUser) {
          return res.status(404).json({ message: "User not found" });
        }

        return  res.status(200).json({ 
          message: "User  deleted successfully",
          success:true
        });
  } catch (error) {
       console.log(error)
  }
};



module.exports = {WailtListController,GetUserController,DeleteUserContoller}