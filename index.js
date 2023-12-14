const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

// http://localhost:3000/query-check/?id=30 hit this url on browser or poastman
app.get("/query-check", (req, res) => {
  console.log(req.query.id);
  res.send("your url query(id) is " + req.query.id);
});

// http://localhost:3000/query-check-new/?id=321&name=onkar hit this url on browser or poastman
app.get("/query-check-new", (req, res) => {
  const arr = Object.keys(req.query);
  console.log(req.query);
  res.send(
    "your url query params is " + arr.map((item) => item + ": " + req.query[item])
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} \nhttp://localhost:3000/`);
});
