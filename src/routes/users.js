var express = require("express");
var router = express.Router();
const AutenticacaoUsers = require("../middlewares/validateRegisterMiddleware");
const AutenticacaoAdmin = require("../middlewares/validateRegisterMiddlewareAdmin");
const cadastroController = require("../controllers/cadastroController");

router.use(express.json());
router.get("/", (req, res) => {
  res.render("pages/home");
});
router.get("/checkout", AutenticacaoUsers, (req, res) => {
  res.render("pages/checkout");
});

router.get("/meuCarrinho", AutenticacaoUsers, (req, res) => {
  res.render("pages/meuCarrinho");
});
router.get("/produtoInterna", (req, res) => {
  res.render("pages/produtoInterna");
});
router.get("/minhaConta", AutenticacaoUsers, (req, res) => {
  res.render("pages/minhaConta");
});
router.get("/finalizado", AutenticacaoUsers, (req, res) => {
  res.render("pages/pedidoFinalizado");
});

router.get("/loginAdmin",  (req, res) => {
  res.render("pages/loginAdmin");
});

router.get("/produtosCadastrar",  (req, res) => {
  res.render("pages/produtosCadastrar");
});

router.post("/login", cadastroController.authlogin);
router.get("/login", cadastroController.login);
// // router.post("/admin", validation, createUser.index);
router.get("/");

router.post("/cadastro", cadastroController.create);

module.exports = router;
