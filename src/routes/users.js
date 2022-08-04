var express = require("express");
const multer = require("multer");
const { storage } = require("../../multerConfig");

const upload = multer({ storage: storage });

var router = express.Router();
const AutenticacaoUsers = require("../middlewares/validateRegisterMiddleware");
const AutenticacaoAdmin = require("../middlewares/validateRegisterMiddlewareAdmin");
const cadastroController = require("../controllers/cadastroController");
const cadastroAdminController = require("../controllers/cadastroAdminController");
const { getProdutos } = require("../controllers/produtosController");
const produtosController = require("../controllers/crudProdutosController");

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
router.get("/produtoInterna", getProdutos, (req, res) => {
  res.render("/views/pages/produtoInterna");
});
router.get("/minhaConta", AutenticacaoUsers, (req, res) => {
  res.render("pages/minhaConta");
});
router.get("/finalizado", AutenticacaoUsers, (req, res) => {
  res.render("pages/pedidoFinalizado");
});

router.get("/loginAdmin", (req, res) => {
  res.render("pages/loginAdmin");
});

router.get("/produtosCadastrar", (req, res) => {
  res.render("pages/produtosCadastrar");
});

router.post("/login", cadastroController.authlogin);
router.post("/cadastro", cadastroController.create);
router.get("/login", cadastroController.login);
// // router.post("/admin", validation, createUser.index);
router.get("/");

router.post("/cadastroAdmin", cadastroAdminController.create);
router.post("/loginAdmin", cadastroAdminController.authlogin);

router.post(
  "/produtosCadastrar",
  upload.single("imagem"),
  produtosController.create
);
router.get("/listProdutos", produtosController.list);
router.put("/updateProduct", produtosController.update);
router.delete("/deleteProduct", produtosController.delete);

module.exports = router;
