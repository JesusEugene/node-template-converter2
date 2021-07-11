const express = require("express");
const homeController = require("../controllers/homeControllers.js");

const homeRouter = express.Router();

homeRouter.get("/", homeController.index);

 
module.exports = homeRouter;