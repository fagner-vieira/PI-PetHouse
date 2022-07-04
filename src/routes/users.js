var express = require("express");
var router = express.Router();
const validation = require("../middlewares/validateRegisterMiddleware");
const loginconntroller = require("../controllers/loginController");
const createUser = require("../controllers/loginController");

router.get("/", (req, res) => {
  res.render("pages/home");
});
router.get("/checkout", (req, res) => {
  res.render("pages/checkout");
});

router.get("/meuCarrinho", (req, res) => {
  res.render("pages/meuCarrinho");
});
router.get("/produtoInterna", (req, res) => {
  res.render("pages/produtoInterna");
});
router.get("/minhaConta", (req, res) => {
  res.render("pages/minhaConta");
});
router.get("/finalizado", (req, res) => {
  res.render("pages/pedidoFinalizado");
});
router.get("/login", validation, loginconntroller.index);

router.post("/admin", createUser.index);

module.exports = router;
