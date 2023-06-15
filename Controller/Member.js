const Member = require('../Models/Member')
const AddMember= async (req, res) => {
  const {firstname,surname, phoneNumber,email,NinNumber} = req.body;
  try {
      // Check if user already exists
      const member= await Member.findOne({email});

      if (existingUser) {
        return res.status(409).json({ message: 'Member already exists' });
      }

      // Create a new user
      const newMember = new  User({
        firstname,
        surname,
        email,
        phoneNumber,
        NinNumber,
      });
   
      // Save the user to the database
     await newMember.save();
     return  res.status(200).json({ 
      message: "Card member has been added",
       member:newMember
    
    });
  } catch (error) {
       return console.log(error)
  }
};

const GetMemberController=async(req,res)=>{
   try {
       const member =await Member.find().sort({createdAt:-1})

       return res.status(200).json({
          success:true,
          member:member
       })

   }catch(error){
      
   }
}

const DeleteUserContoller = async (req, res) => {
    //  const {id} =parseInt(req.params.id)
  try {
    // Check if the user exists
    const user = await Member.findById (req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'member not found' });
    }

    // Delete the user
    await user.remove();

    res.json({ message: 'member deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
    AddMember,
    GetMemberController,
    DeleteUserContoller,
}