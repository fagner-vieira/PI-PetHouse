'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.createTable('enderecos', { 
      id: { type:Sequelize.INTEGER,
        allowNull: false,
      autoIncrement: true,
      primaryKey: true
       },
       rua:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       numero:{
        type: Sequelize.STRING(10),
        allowNull: false,
       },
       bairro:{
        type:Sequelize.STRING,
        allowNull:false,
       },
       estado:{
        type:Sequelize.STRING, 
        allowNull: false,
       },
       cep:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       complemento: Sequelize.STRING,
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
    await queryInterface.dropTable('enderecos');
     
  }
};
