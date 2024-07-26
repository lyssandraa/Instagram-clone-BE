const { Router } = require("express");
const faveRouter = Router();

const { addFave, getFaves } = require("./controllers");

faveRouter.post("/addFave", addFave);

faveRouter.get("/getFaves", getFaves);

module.exports = faveRouter;
