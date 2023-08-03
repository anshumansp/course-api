const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
const apiData = require("./data.json");

app.get("/", (req, res) => {
  res.json(apiData);
});

// ----------Send Data One by One on every Get Request----------
// let currentIndex = -1;
// app.get("/", (req, res) => {
//   currentIndex = (currentIndex + 1) % apiData.length;
//   const responseData = apiData[currentIndex];
//   res.json(responseData);
// });

app.listen(port, () => {
  console.log("I am live again");
});
