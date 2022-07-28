const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const { Result } = require("express-validator");
const Produtos = require("../../models/Produtos")(sequelize, DataTypes);

const produtosController = {
  index: async (req, res) => {
    const produtos = await Produtos.findAll();
    res.render.produtoInterna('produto',{produtos: Result});
  },
};

module.exports = produtosController;


