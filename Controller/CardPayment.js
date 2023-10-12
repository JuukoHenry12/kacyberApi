const CardPayment = require("../Models/CardPayment");
const CardPaymentStatus = require("../Models/CardPaymentStatus");
const { v4: uuidv4 } = require("uuid");
const CreateCardPayment = async (req, res) => {
  const { amount, phone, email, name, network } = req.body;

  try {
    const body = {
      amount: amount,
      currency: "EUR",
      externalId: "12903",
      payer: {
        partyIdType: "MSISDN",
        partyId: phone,
      },
      payerMessage: name,
      payeeNote: network,
    };

    const uuid = uuidv4();

    const response = await fetch(
      "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay",
      {
        method: "POST",
        body: JSON.stringify(body),
        // Request headers
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "X-Reference-Id": uuid,
          "X-Target-Environment": "sandbox",
          "Cache-Control": "no-cache",
          "Ocp-Apim-Subscription-Key": process.env.SECRET_KEY,
        },
      }
    );

    if (response.status === 202) {
      const paymentstatus = await response.text();

      const carpayment = new CardPayment({
        name,
        phone,
        email,
        network,
        amount,
        id: uuid,
        status: paymentstatus,
      });

      await carpayment.save();

      // Now, call GetCardpaymentSatus with the UUID
      const cardStatus = await GetCardpaymentSatus(uuid);
      const carpaymentstatus = new CardPaymentStatus(cardStatus);
      carpaymentstatus.save();

      return res.status(200).json({
        message:
          "Thank you! Your Card Payment will be received when authorized.",
        carpayment: carpayment,
        cardStatus: cardStatus,
      });
    } else {
      return res.status(500).json({
        message: "Expired token or other error",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred",
    });
  }
};

const GetCardpaymentSatus = async (uuid) => {
  try {
    const response = await fetch(
      `https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay/${uuid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "X-Target-Environment": "sandbox",
          "Cache-Control": "no-cache",
          "Ocp-Apim-Subscription-Key": process.env.SECRET_KEY,
        },
      }
    );

    const responseText = await response.text();

    // Parse the JSON responseText into a JavaScript object
    const responseData = JSON.parse(responseText);

    // Create a new CardPaymentStatus instance based on the object
    const cardStatus = new CardPaymentStatus(responseData);

    return cardStatus;
  } catch (error) {
    console.error(error);
    return null; // Handle the error as needed
  }
};
module.exports = {
  CreateCardPayment,
  GetCardpaymentSatus,
};
