
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MemberSchema = new Schema( {
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
   NinNumber:{
        type:String,
        require:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}),
Member = mongoose.model('Member', MemberSchema);

module.exports = Member;
