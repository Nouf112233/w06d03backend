const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

//routers

//initial express
const app = express();

//config inviroment variable
dotenv.config();

//builtin level meddilware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routers meddilware

//port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
