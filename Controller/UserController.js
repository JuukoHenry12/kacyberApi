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
        status: 'pending',
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
const   CountUserController=async(req,res)=>{
  try {
      const user =await User.find().count()

       return res.status(200).json({
         success:true,
         users:user
      })

  }catch(error){
     
  }
}

const DeleteUserContoller = async (req, res) => {
    //  const {id} =parseInt(req.params.id)
  try {
    await User.findByIdAndDelete(req.params.id,req.body )
     res.send({
        success:true,
        message:"member deleted successfully"
      })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const EditUserController = async(req,res)=>{
  try{
    await User.findByIdAndDelete(req.params.id,req.body)
    res.send({
       success:true,
       message:"User editeed successfully"
    })
  }catch(error){
    res.send({
      success:false,
      message:error.message
  })
  }
}


module.exports = {WailtListController,GetUserController,DeleteUserContoller,
  EditUserController,CountUserController 
}