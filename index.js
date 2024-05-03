const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());
const port = 8080;

app.get("/", (req, res) => {
  res.send({ status: 200, message: "access home" });
});

app.get("/ready", (req, res) => {
  res.send({ status: 200, message: "app is ready" });
});


app.get("/health", (req, res) => {
  res.send({ status: 200, message: "app health is ready" });
});

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
