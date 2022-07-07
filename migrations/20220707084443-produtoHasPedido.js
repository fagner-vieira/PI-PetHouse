
 'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable('produtoHasPedido', { 
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
      quantidade: Sequelize.INTEGER
     });
     
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.dropTable('produtoHasPedido');
     
  }
};


//sequelize migration:generate --name produtoHasPedido <=  (exemp. comando para criar migrates)//
