module.exports = (sequelize, DataTypes) => {
  const Produtos = sequelize.define(  
  "Produtos",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      racao: {
        type: DataTypes.STRING,
      },
      sabor_racao: {
        type: DataTypes.STRING,
      },
      peso_pacote_racao: {
        type: DataTypes.STRING,
      },
      peco_venda: {
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
