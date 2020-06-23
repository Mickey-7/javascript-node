// snippet : req-ex
const express = require("express");
// snippet  : req-p
const path = require("path");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.get("/", function (req, res, next) {
  res.render("index", { title: "hello world!" });
});

module.exports = app;
