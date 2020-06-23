const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post("/post-test", (req, res) => {
  console.log(`got body : ${req.body.username}`);
  res.sendStatus(200);
});

let port = 8080;
app.listen(port, () => {
  console.log(`started server at port ${port}`);
});

// terminal1
// C:\Users\donat\Documents\stackabuse-http-post-body-express>node index1
// started server at port 8080

// terminal2
// C:\Users\donat\Documents\stackabuse-http-post-body-express>curl -d "username=scott&password=secret&website=stackabuse.com" -X POST http://localhost:8080/post-test

// terminal1
// C:\Users\donat\Documents\stackabuse-http-post-body-express>node index1
// started server at port 8080
// got body : scott
