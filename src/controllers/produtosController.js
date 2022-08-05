const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const db = require("../../models/Produtos")(sequelize, DataTypes);

const produtosController = {
  getProdutos: function (req, res) {
    db.findByPk()
      .then(function (produtosReturn) {
        return res.render("pages/produtoInterna", { produtos: produtosReturn });
      })
      .catch((error) => console.log(error));
  },
};

module.exports = produtosController;
