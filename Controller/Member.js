const Member = require('../Models/Member')

const AddMember= async (req, res) => {
  const {firstname,surname, phoneNumber,email,NinNumber} = req.body;
  try {
      // Check if user already exists
      const member= await Member.findOne({email});

      if ( member) {
        return res.status(409).json({ message: 'Member already exists' });
      }

      // Create a new user
      const newMember = new  Member({
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

const   CountMemberController=async(req,res)=>{
  try {
      const member =await Member.find().count()

       return res.status(200).json({
         success:true,
         member:member
      })

  }catch(error){
     
  }
}

const DeleteMemberContoller = async (req, res) => {

  try {
    
    await Member.findByIdAndDelete(req.params.id,req.body )

    res.send({
        success:true,
        message:"member deleted successfully"
      })

  } catch (error) {
      res.status(500).json({ error: 'Server error' });
  }
};


module.exports = {
    AddMember,
    GetMemberController,
    DeleteMemberContoller,
    CountMemberController,
}