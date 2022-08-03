'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('produtos', {
      id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
      nome: {
          type: Sequelize.STRING,
          allowNull: false
      },
      preco: {
          type: Sequelize.FLOAT,
          allowNull: false,
      },
      descricao:{
         type: Sequelize.TEXT
      },
      imagem:{
          type: Sequelize.STRING
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
  
     await queryInterface.dropTable('produtos')
  
  }
}
