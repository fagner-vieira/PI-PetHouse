
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable('produtoHasFornecedor', { 
      fornecedor_id: {type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model:"Fornecedor",
        key: 'id'
      }},
      produtos_id: {type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model:"Produtos",
        key: 'id'
      }}
      ,
      valor_pago: Sequelize.FLOAT,

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
   
      await queryInterface.dropTable('produtoHasFornecedor');
     
  }
}; 
