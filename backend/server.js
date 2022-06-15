require("dotenv").config();

const express = require("express");

const app = express(); //to startup express

// creating middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// setting up routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my portfolio" });
});

// starting up express server to listen to requests
app.listen(process.env.PORT, () => {
  console.log(`Server started. Listening on port: ${process.env.PORT}!!!`);
});

process.env;
