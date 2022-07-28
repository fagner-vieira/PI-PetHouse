const { Router } = require("express");
const express = require("express");

const routes = express.Router();

const indexController = require("../controllers");

routes.get("/", indexController.exibirHome);

routes.get("/home", indexController.redirectHome);



module.exports = routes;