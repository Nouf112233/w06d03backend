const express = require("express");

const { allFoods } = require("./../controlles/food");

const foodRouter = express.Router();

foodRouter.get("/", allFoods);

module.exports = foodRouter;
