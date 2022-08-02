const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const adminSchema = require("../../models/Admin")(sequelize, DataTypes);
const bcrypt = require("bcryptjs");

const cadastroAdminController = {
  login: (req, res) => {
    res.render("pages/loginAdmin");
  },
  create: async (req, res) => {
    const { nome, email, senha, confirma_senha, funcao } = req.body;

    if (!email.includes("@PetHouse.com")) {
      return res.render("pages/loginAdmin", {
        msg: "Voce não tem permissão para cadastrar!",
      });
    }

    if (await adminSchema.findOne({ where: { email: email } })) {
      return res.render("pages/loginAdmin", {
        message: ".",
      });
    }
    if (senha.length < 6) {
      return res.render("pages/loginAdmin", {
        msg: "Senha deve ter pelo menos 6 caracteres!",
      });
    }
    if (senha !== confirma_senha) {
      return res.render("pages/loginAdmin", {
        msg: "as senhas devem ser igual",
      });
    }

    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(senha, salt);

    try {
      const user = await adminSchema.create({
        nome,
        email,
        funcao,
        senha: senhaHash,
        confirma_senha,
      });
      return res.status(200).redirect("/");
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  //login do Admin
  authlogin: async (req, res) => {
    const { email, senha } = req.body;

    if (!email) {
      return res.status(422).json({ message: "Email é obrigatório" });
    }
    if (!senha) {
      return res.status(422).json({ message: "Senha é obrigatório!" });
    }

    //verificando se o email do usuario existe
    const user = await adminSchema.findOne({ where: { email: email } });

    if (!user) {
      return res.render("pages/loginAdmin", {
        msgLogin: "Usuario ou senha incorreto!",
      });
    }

    // try {
    if (!bcrypt.compareSync(senha, user.senha)) {
      res.render("pages/loginAdmin", {
        msgLogin: "Usuario ou senha incorretos!",
      });
      return;
    }
    req.session.emailAdmin = user.email;
    res.render("pages/produtoInterna");
  },
};

module.exports = cadastroAdminController;
