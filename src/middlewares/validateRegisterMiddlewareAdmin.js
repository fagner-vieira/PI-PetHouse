function AutenticacaoAdmin(req, res, next) {
  if ("emailAdmin" in req.session) {
    next("/produtosCadastrar");
  } else {
    res.redirect("/loginAdmin");
  }
}

module.exports = AutenticacaoAdmin;
