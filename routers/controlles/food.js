const axios = require("axios");

const foods = [];

fs.readFile("./db/food.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    foods = JSON.parse(data.toString());
  }
});

const allFoods = (req, res) => {
  res.status(200).json(foods);
};
