const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const cliente = require("../../models/Cliente")(sequelize, DataTypes);
const bcrypt = require("bcryptjs");

const cadastroController = {
  login: (req, res) => {
    res.render("pages/login");
  },
  create: async (req, res) => {
    const { nome_cliente, email, senha, confirma_senha } = req.body;

    if (await cliente.findOne({ where: { email: email } })) {
      return res.render("pages/login", {
        message: ".",
      });
    }
    if (senha.length < 6) {
      return res.render("pages/login", {
        msg: "Senha deve ter pelo menos 6 caracteres!",
      });
    }
    if (senha !== confirma_senha) {
      return res.render("pages/login", { msg: "as senhas devem ser igual" });
    }

    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);

    try {
      const user = await cliente.create({
        nome_cliente,
        email,
        senha: senhaHash,
        confirma_senha,
      });
      return res.status(200).redirect("/");
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  //login do usuario

  authlogin: async (req, res) => {
    const { email, senha } = req.body;

    if (!email) {
      return res.status(422).json({ message: "Email é obrigatório" });
    }
    if (!senha) {
      return res.status(422).json({ message: "Senha é obrigatório!" });
    }

    //verificando se o email do usuario existe
    const user = await cliente.findOne({ where: { email: email } });

    if (!user) {
      return res.render("pages/login", {
        msgLogin: "Usuario ou senha incorreto!",
      });
    }

    // try {
    if (!bcrypt.compareSync(senha, user.senha)) {
      res.render("pages/login", {
        msgLogin: "Usuario ou senha incorretos!",
      });
      return;
    }
    req.session.emailUsuario = user.email;
    res.redirect("/");
  },
};

module.exports = cadastroController;
