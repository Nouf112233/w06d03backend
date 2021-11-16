const express = require("express");

const { allusers, userbyemail, newUser } = require("./../controlles/user");

const userRouter = express.Router();

userRouter.get("./", allusers);
userRouter.get("./email", userbyemail);
userRouter.post("./", newUser);

module.exports = userRouter;
