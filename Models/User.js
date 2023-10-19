
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema( {
	firstname:{
        type:String,
        require:true
    },
    surname:{
        type:String,
        require:true
   },
   phoneNumber:{
         type:String,
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
    status:{
        type:String
    },
    NinNumber:{
        type:String,
        require:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}),
User = mongoose.model('User', userSchema);

module.exports = User;
