const sequelize = require("../../models/db");
const DataTypes = require("sequelize");
const Produtos = require("../../models/Produtos")(sequelize, DataTypes);

const produtosController = {
  list: async (req, res) => {
    const produtos = await Produtos.findAll();
    res.json(produtos);
  },
  create: async (req, res) => {
    const { nome, descricao, preco, imagem } = req.body;
    console.log(req.body, req.file);

    const produtos = await Produtos.create({ ...req.body });
    return res.status(200).json(produtos);
    console.log(produtos);
  },
  update: async (req, res) => {
    const { id, preco, descricao } = req.body;

    const newProdutos = await Produtos.update(
      { id, preco, descricao },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    return res.json(newProdutos);
  },
  delete: async (req, res) => {
    const { id } = req.body;
    Produtos.destroy({
      where: {
        id: req.body.id,
      },
    });
    return res.json({
      msg: "Produto Excluido com Sucesso!",
    });
  },
};

module.exports = produtosController;
