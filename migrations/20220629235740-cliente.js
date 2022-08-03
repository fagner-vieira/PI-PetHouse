'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('cliente',  { 
         id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome_cliente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome_social: Sequelize.STRING,
    telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    email:{
        type: Sequelize.STRING(99),
        unique: true,
        allowNull: false

    },
    senha: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
         },
        updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }, })
     
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.dropTable('cliente');
     
  }
};
