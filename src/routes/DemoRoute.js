const express = require("express");
const route = express.Router();
const demoController = require("../app/controllers/DemoController");

route.get("/", demoController.index);

module.exports = route;
