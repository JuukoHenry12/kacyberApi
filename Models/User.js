const mongoose = require('mongoose');
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
   },
    phone:{
         type:String,
         require:true
    },

    NinNumber:{
        type:String,
        require:true
   },

})
module.exports = mongoose.model('User', UserSchema);