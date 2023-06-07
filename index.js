const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const Port = process.env.PORT || 4000;
const UserRouter = require("./Routes/UserRouter");
const StuffRouter = require("./Routes/StuffRouter");



app.use(express.json());
app.use(cors());
app.use("/api/user", UserRouter);
app.use("/api/stuff", StuffRouter);

mongoose
  .connect(process.env.MONGO_URL , {
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
