const mongoose = require('mongoose');
const UserSchema= new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    surname:{
        type:String,
        require:true
   },
   phoneNumber:{
         type:Number,
         require:true
    },

    email:{
        type:String,
        require:true
   },
    selectedOption:{
    type:String,
    require:true
    },
    NinNumber:{
        type:String,
        require:true
    },
})
module.exports = mongoose.model('User', UserSchema);