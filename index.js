const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const Port = process.env.PORT || 4000;
const UserRouter = require("./Routes/UserRouter");
const StuffRouter = require("./Routes/StuffRouter");
const MemberRoute = require("./Routes/memberRoute")
const CardPaymentRouter = require("./Routes/CardPayment")


app.use(express.json());
app.use(cors());
var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use("/api/user", UserRouter);
app.use("/api/stuff", StuffRouter);
app.use("/api/member",MemberRoute)
app.use("/api/cardpayment",CardPaymentRouter)

mongoose
  .connect('mongodb://127.0.0.1:27017/contactless' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
});

app.listen(Port, () => {
  console.log(`the server is running on port ${Port}`);
});
