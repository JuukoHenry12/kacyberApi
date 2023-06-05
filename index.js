const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const UserRouter = require("./Routes/UserRouter");
const StuffRouter = require("./Routes/StuffRouter");
const app = express();
const Port = process.env.PORT || 4000;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/user/", UserRouter);
app.use("/api/stuff/", StuffRouter);
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.listen(Port, () => {
  console.log(`the server is running on port 5000`);
});
