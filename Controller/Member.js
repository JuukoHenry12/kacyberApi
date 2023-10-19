const Member = require('../Models/Member')

const AddMember= async (req, res) => {
  const {name, phoneNumber,status,cardnumber, cardType,IssuedBy} = req.body;
  try {
      // Check if user already exists
      const member= await Member.findOne({ phoneNumber});

      if ( member) {
        return res.status(409).json({ message: 'Member already exists' });
      }

      // Ensure cardnumber contains exactly 3 digits
      if (!/^\d{3}$/.test(cardnumber)) {
        return res.status(400).json({ message: 'Card number must be a 3-digit number' });
      }

   
      // Create a new user
      const newMember = new  Member({
        name,
        phoneNumber,
        cardType,
        cardnumber,
        cardType,
        IssuedBy,
        status: status || 'Received',
      });
   
       // Save the user to the database
       await newMember.save();
       return  res.status(200).json({ 
       message: "Card member has been added",
       member:newMember
    
    });
  } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
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