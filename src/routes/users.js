var express = require("express");
var router = express.Router();
const AutenticacaoAdmin = require("../middlewares/validateRegisterMiddleware");
const cadastroController = require("../controllers/cadastroController");

router.use(express.json());
router.get("/", (req, res) => {
  res.render("pages/home");
});
router.get("/checkout", AutenticacaoAdmin, (req, res) => {
  res.render("pages/checkout");
});

router.get("/meuCarrinho", AutenticacaoAdmin, (req, res) => {
  res.render("pages/meuCarrinho");
});
router.get("/produtoInterna", AutenticacaoAdmin, (req, res) => {
  res.render("pages/produtoInterna");
});
router.get("/minhaConta", AutenticacaoAdmin, (req, res) => {
  res.render("pages/minhaConta");
});
router.get("/finalizado", AutenticacaoAdmin, (req, res) => {
  res.render("pages/pedidoFinalizado");
});
router.post("/login", cadastroController.authlogin);
router.get("/login", cadastroController.login);
// // router.post("/admin", validation, createUser.index);
router.get("/");

router.post("/cadastro", cadastroController.create);

module.exports = router;
