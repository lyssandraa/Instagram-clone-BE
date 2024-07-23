const { Router } = require("express");
const userRouter = Router();

const { signup } = require("./controllers");
const { hashPass } = require("../middleware/auth");
const { compare } = require("bcrypt");

userRouter.post("", hashPass, signup);

module.exports = userRouter;
