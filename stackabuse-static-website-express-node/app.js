// snippet : req-ex
const express = require("express");
const app = express();

app.use("/", express.static("html"));
// type on url of web browser
// http://localhost:5050/about
app.use("/about", express.static("html/about.html"));

module.exports = app;

// The app is set to .use() the html folder to serve static files.
// Meaning the route to the resource in the url will not look for routes in the Express app,
// instead search the file system for the requested file.

// You can see by requesting the '/' route the index.html has been loaded by default.
// You can switch to '/about.html' and the 'about' HTML file will be loaded.
// This principle works with any type of file.
// You can add an image to this folder as well,
// and it will be displayed the same way if you navigated to it though the URL.
