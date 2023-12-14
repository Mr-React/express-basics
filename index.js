const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

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



app.listen(port, () => {
  console.log(`Example app listening on port ${port} \nhttp://localhost:3000/`);
});
