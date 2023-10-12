

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CardPaymentSchema = new Schema( {
    id:{
      type:String
    },
	name:{
        type:String,
        require:true
    },
    amount:{
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

    status:{
        type:String,
        require:true
   },
  createdAt: {
      type: Date,
      default: Date.now
  }
}),
Member = mongoose.model('Payments', CardPaymentSchema);

module.exports = Member;