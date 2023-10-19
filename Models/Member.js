
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MemberSchema = new Schema( {
    name:{
        type:String,
        require:true
    },
   phoneNumber:{
         type:String,
         require:true
    },
    cardType:{
        type:String,
        require:true 
    },
    CardNumber:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
 
    IssuedBy:{
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
