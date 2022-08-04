'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      Example:
     await queryInterface.bulkInsert('Produtos', [{
      nome: 'Ração Mista',
      preco: 79.90,
      descricao: "Ração Mista para animais, feita a base de frango e carne.",
      imagem: "" ,
     }], {});
    
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Produtos', null, {});
     
  }
};
