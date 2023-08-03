const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
const apiData = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello, I am live!");
});

app.get("/service", (req, res) => {
  res.json(apiData);
});

app.listen(port, () => {
  console.log("I am live again");
});
