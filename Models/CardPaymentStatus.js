const mongoose = require('mongoose');

const cardPaymentStatusSchema= new mongoose.Schema({
  financialTransactionId: {
    type: String,
    required: true,
  },
  externalId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  payer: {
    partyIdType: {
      type: String,
      required: true,
    },
    partyId: {
      type: String,
      required: true,
    },
  },
  payerMessage: {
    type: String,
    required: true,
  },
  payeeNote: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const CardPaymentStatus = mongoose.model('CardPaymentStatus', cardPaymentStatusSchema);

module.exports = CardPaymentStatus ;
