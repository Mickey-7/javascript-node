// snippet : req-ex
const express = require("express");
// snippet : req
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/post-test", (req, res) => {
  const data = JSON.stringify(req.body);
  console.log(`got body : ${data}`);
  res.sendStatus(200);
});

let port = 8080;
app.listen(port, () => {
  console.log(`started server at port ${port}`);
});

// terminal1:
// C:\Users\donat\Documents\stackabuse-http-post-body-express>node index
// started server at port 8080

// terminal2:
// C:\Users\donat\Documents\stackabuse-http-post-body-express>curl -d "username=scott&password=secret&website=stackabuse.com" -X POST http://localhost:8080/post-test

// terminal1:
// C:\Users\donat\Documents\stackabuse-http-post-body-express>node index
// started server at port 8080
// got body : {"username":"scott","password":"secret","website":"stackabuse.com"}
