const db = require('../../models/Produtos')

const produtosController = {
  getProdutos: function(req, res){
    db.Produtos.findAll()
      .then(function(produtosReturn) {
        return res.render('listProdutos', {produtos: produtosReturn})
      })
      .catch((error) => console.log(error))

  }
};


module.exports = produtosController;


