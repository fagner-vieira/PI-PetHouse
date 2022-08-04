'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [{
      nome: 'Ração Vegetariana',
      preco: 79.90,
      descricao: "Ração vegana para animais, feita a base de batata e spinafre.",
      imagem: "" ,
     }], {});
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Produtos', null, {});
    
  }
};
