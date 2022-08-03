module.exports = (sequelize, DataTypes) => {
  const Produtos = sequelize.define(  
  "Produtos",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
      },
      preco: {
        type: DataTypes.FLOAT,
      },
      descricao: {
        type: DataTypes.TEXT,
      },
      imagem: {
        type: DataTypes.STRING,
      },
     
    },

    {
      tableName: "produtos",
      timestamp: true,
    });

 Produtos.associate = (listaDeModels) => {
    Produtos.belongToMany(listaDeModels.Pedido, {
        foreingKey: "fk_pedido",
        as:"pedido",
        through:listaDeModels.ProdutosHasPedido
    }
        )
   };

     return Produtos;
 };
