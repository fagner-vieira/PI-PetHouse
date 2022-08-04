
 'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable('carrinho', { 
      pedido_id: {type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model:"Pedido",
        key: 'id'
      }},
      produtos_id: {type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model:"Produtos",
        key: 'id'
      }}
      ,
      quantidade: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
         },
        updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
     });
     
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.dropTable('carrinho');
     
  }
};


//sequelize migration:generate --name produtoHasPedido <=  (exemp. comando para criar migrates)//
