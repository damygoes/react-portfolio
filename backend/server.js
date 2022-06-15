const express = require("express");
require("dotenv").config(); //enable us import the .env file where we said all our confidential data. Remember to include this .env file in the .gitignore file

const app = express(); //invoke express app

// defining middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// defining routes for server to listen to
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my portfolio" });
});

// start express to listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server started! Listening on port: ${process.env.PORT}!!!`);
});
