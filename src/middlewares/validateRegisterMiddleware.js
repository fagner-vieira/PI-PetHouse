function AutenticacaoUsers(req, res, next) {
  if ("emailUsuario" in req.session) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = AutenticacaoUsers;
