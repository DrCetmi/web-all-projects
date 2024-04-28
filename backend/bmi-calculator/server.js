const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmicalculator", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  console.log(typeof weight, typeof height);
  const heightInMeters = height / 100;

  const bmi = weight / heightInMeters ** 2;

  let result = `Ihr BMI ist ${bmi.toFixed(2)}.`;

  if (bmi < 18.5) {
    result += " Sie haben Untergewicht.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result += " Sie haben ein normales Gewicht.";
  } else if (bmi >= 25 && bmi < 29.9) {
    result += " Sie haben Übergewicht.";
  } else {
    result += " Sie haben Fettleibigkeit.";
  }

  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
