const express = require("express");
//const bodyParser = require("body-parser");
const zod = require("zod");

const app = express();
const port = 3000;

app.use(express.json());
// to enable "body" parser
app.use(express.urlencoded({ extended: false }));

// local store
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

const schema = zod.array(zod.number());
app.post("/health-check-zod", (req, res) => {
  const kidneys = req.body.kidneys;
  console.log(req.body);
  const response = schema.safeParse(kidneys);

  res.send({
    response,
  });
});

app.get("/health-checkup", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Onkar" || password != "Onkar123") {
    res.status(403).json({
      msg: "User doesn't exist",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
    return;
  }

  res.send("You are healthy");
});

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealtyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealtyKidneys += 1;
    }
  }

  const numberOfUnhealtyKidneys = numberOfKidneys - numberOfHealtyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealtyKidneys,
    numberOfUnhealtyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done!",
  });
});

// Global Catches => It helps you to give the user a better error message
// This is a special type of middleware function is Express that has four arguments instead
// of three(`(err, req, res, next)`). Express recognizes it as an error-handling middleware
// because of these four arguments
app.use(function (err, req, res, next) {
  res.json({
    msg: "Smoething is up with your server",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} \nhttp://localhost:3000/`);
});
