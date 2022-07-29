function AutenticacaoAdmin(req, res, next) {
    if ("emailUsuario" in req.session) {
      next("/produtosCadastrar");
    } else {
      res.redirect("/loginAdmin");
    }
  }
  
  module.exports = AutenticacaoAdmin;
  