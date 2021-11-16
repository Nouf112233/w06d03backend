const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

//routers
const foodRouter = require("./routers/routes/food");
const userRouter = require("./routers/routes/food");

//initial express
const app = express();

//config inviroment variable
dotenv.config();

//builtin level meddilware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routers meddilware
app.use("/food",foodRouter);
app.use("/user",userRouter);

//port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
