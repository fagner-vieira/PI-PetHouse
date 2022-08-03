var express = require("express");
var router = express.Router();
const AutenticacaoUsers = require("../middlewares/validateRegisterMiddleware");
const AutenticacaoAdmin = require("../middlewares/validateRegisterMiddlewareAdmin");
const cadastroController = require("../controllers/cadastroController");
const cadastroAdminController = require("../controllers/cadastroAdminController");

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
router.get("/produtoInterna", (req, res) => {
  res.render("pages/produtoInterna");
});
router.get("/minhaConta", (req, res) => {
  res.render("pages/minhaConta");
});
router.get("/finalizado", (req, res) => {
  res.render("pages/pedidoFinalizado");
});

router.get("/loginAdmin", (req, res) => {
  res.render("pages/loginAdmin");
});

router.get("/produtosCadastrar", (req, res) => {
  res.render("pages/produtosCadastrar");
});

router.post("/login", cadastroController.authlogin);
router.get("/login", cadastroController.login);
// // router.post("/admin", validation, createUser.index);
router.get("/");

router.post("/cadastroAdmin", cadastroAdminController.create);
router.post("/loginAdmin", cadastroAdminController.authlogin);

module.exports = router;
