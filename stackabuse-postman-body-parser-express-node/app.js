// snippet : req-ex
const express = require("express");

const app = express();

// snippet : req
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  let data = {
    message: "Hello world",
  };
  res.status(200).send(data);
});

app.post("/", function (req, res) {
  let data = {
    //   the message below is from the message on .get above
    response: `you sent : ${req.body.message}`,
  };

  res.status(200).send(data);
});

module.exports = app;
