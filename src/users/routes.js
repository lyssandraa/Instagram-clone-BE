const { Router } = require("express");
const userRouter = Router();

const {} = require("./controllers");
const {} = require("../middleware/auth");
const { compare } = require("bcrypt");

module.exports = userRouter;
