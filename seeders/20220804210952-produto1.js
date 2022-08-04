'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Produtos', [{
       nome: 'Ração De Carne',
       preco: 79.90,
       descricao: "Ração de Carne para animais, feita a base carne de cordeiro.",
       imagem: "" ,
      }], {});

  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Produtos', null, {});
     
  }
};
