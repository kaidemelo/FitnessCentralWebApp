//Imports
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

//Initilize middleware
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
app.use(express.json());
app.use(cors());

//Connect to mysql db
const db = mysql.createConnection({
  user: 'kai',
  host: 'localhost',
  password: 'root123',
  database: 'fitnesscentral'
});

//Display mysql db status
db.connect(function (err) {
  if (err) {
      console.log('Error connecting to Database',err);
      return;
  }
  console.log('Connection established');
});

//Post request for users registering (adds credentials to mysql db)
app.post("/registered", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  //Hash password using bcrypt
  bcrypt.hash(password,saltRounds,(err, hash) => {
    if (err) {
      console.log(err);
    }
  //Insert user details into db including hashed version of password
    db.query(
    "INSERT INTO users (username, email, password) VALUES (?,?,?)",
    [username, email, hash],
    (err, result) => {
    console.log(err);
    }
  );
  })
});

//Post request for users logging in (checks credentials against mysql db)
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  //Select username from mysql db that matches query sent from front end by user
  db.query(
    "SELECT * FROM fitnesscentral.users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
      //If result exists compare password given by user to password hash stored on mysql db
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
      //If response is a match send result back
            res.send(result);
          } else {
      //Else if username and password don't match what's on the db return this message
            res.send({ message: "Incorrect username/password combination" });
          }
        })
      } else {
      //If user credentials don't exist return this message
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

//Listen to the port 3001
app.listen(3001, () => {
  console.log("Server running");
});