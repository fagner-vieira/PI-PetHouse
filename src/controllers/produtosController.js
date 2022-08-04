const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const produtosSchema = require("../../models/Produtos")(sequelize, DataTypes);

const produtosController = {
  getProdutos: function(req, res){
    produtosSchema.findAll()
      .then(function(produtosReturn) {
        console.log(produtosReturn);
        return res.render('/produtoInterna', {produtos: produtosReturn})
        
      })
      .catch((error) => console.log(error))

  }
};


module.exports = produtosController;


