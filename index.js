const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const UserRouter = require("./Routes/UserRouter");
const app = express();
const Port = process.env.PORT || 4000;
const cors = require("cors");
const mysql = require("mysql");

app.use(express.json());
app.use(cors());
app.use("/api/user/", UserRouter);
app.use(
  express.urlencoded({
    extended: true,
  })
);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contactless",
});

app.post("/api/waitlist", (req, res) => {
  const q =
    "INSERT INTO users(`firstname`,`surname`,`email`,`phoneNumber`,`selectedOption`,`NinNumber`) VALUES (?)";
  const values = [
    req.body.firstname,
    req.body.surname,
    req.body.email,
    req.body.phoneNumber,
    req.body.selectedOption,
    req.body.NinNumber,
  ];
  connection.query(q, [values], (error, data) => {
    if (error) {
      res.status(500).json(error);
    } 
    else {
      res
        .status(200)
        .json({
          status:200,
          success:true,
          message:"Thank for Joinig,You been added to the Waiting List"
        });
    }
  });
});

// get Users
app.get("/api/getUsers", (req, res) => {
  connection.query("SELECT * FROM users", function (error, result, fields) {
    if (error) throw error;
    return res.status(300).json(result);
  
  });
});

app.delete("/api/user/:id", (req, res) => {
  // Get the ID of the record to delete
  const id = req.params.id;

  const conquery = `DELETE FROM users WHERE id = ?`;
  //Exection the query
  connection.query(conquery, [id], (error, rows) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("User has been deleted successfully");
    }
  });
});

// Create a route to update a record in the database
app.put("/api/user/:id", (req, res) => {
  // Get the ID of the record to update
  const id = req.params.id;

  // Get the new values for the record
  const name = req.body.name;
  const email = req.body.email;

  // Create a query to update the record
  const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;

  // Execute the query
  connection.query(sql, [name, email, id], (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Record updated successfully");
    }
  });
});

app.listen(5000, () => {
  console.log(`the server is running on port 5000`);
});
