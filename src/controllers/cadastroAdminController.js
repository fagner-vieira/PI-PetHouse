const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const admin = require("../../models/Admin")(sequelize, DataTypes);
const bcrypt = require("bcryptjs");

const cadastroAdminController = {
  login: (req, res) => {
    res.render("pages/loginAdmin");
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

    //verificando se o email do admin existe
    const admin = await admin.findOne({ where: { email: email } });

    if (!admin) {
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
    //   return;
    // } catch (error) {
    //   res.json(error);
    // }
    req.session.emailUsuario = user.email;
    res.redirect("/");
  },
};

module.exports = cadastroAdminController;