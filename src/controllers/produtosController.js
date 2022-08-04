const db = require("../../models/Produtos");

const produtosController = {
  getProdutos: function (req, res) {
    db.Produtos.findAll()
      .then(function (produtosReturn) {
        return res.render("produtoInterna", { produtos: produtosReturn });
      })
      .catch((error) => console.log(error));
  },
};

module.exports = produtosController;
