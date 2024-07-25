const { Router } = require("express");
const apiRouter = Router();

const { getPhotos } = require("../unsplash/photoController");

apiRouter.get("/photos", getPhotos);

module.exports = apiRouter;
