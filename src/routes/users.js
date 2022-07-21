var express = require("express");
var router = express.Router();
const validation = require("../middlewares/validateRegisterMiddleware");
const loginconntroller = require("../controllers/loginController");
const cadastroController = require("../controllers/cadastroController");
const createUser = require("../controllers/loginController");
const sequelize = require("../../models/db");
// const cliente = require("../../models/Cliente")(sequelize, DataTypes);
router.use(express.json());
router.get("/", (req, res) => {
  res.render("pages/home");
});
router.get("/checkout", (req, res) => {
  res.render("pages/checkout");
});

router.get("/meuCarrinho", (req, res) => {
  res.render("pages/meuCarrinho");
});
router.get("/produtoInterno", (req, res) => {
  res.render("pages/produtoInterno");
});
router.get("/minhaConta", (req, res) => {
  res.render("pages/minhaConta");
});
router.get("/finalizado", (req, res) => {
  res.render("pages/pedidoFinalizado");
});
router.get("/login", validation, loginconntroller.index);

// // router.post("/admin", validation, createUser.index);

router.post("/cadastro", cadastroController.create);

module.exports = router;
