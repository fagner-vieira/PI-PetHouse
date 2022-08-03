'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.createTable('cartaoCadastro', { id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
  },
  apelido_cartao: Sequelize.STRING,
  numero_cartao: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  cvv:{
     type: Sequelize.STRING,
     allowNull: false
  },
  vencimento_cartao:{
      type: Sequelize.DATE,
      allowNull: false
  },
  nome_cartão:{
      type: Sequelize.STRING,
      allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
     },
    updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
})
     
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.dropTable('cartaoCadastro');
     
  }
};
