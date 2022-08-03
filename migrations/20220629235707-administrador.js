'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('administrador', { 
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
  funcao: Sequelize.STRING,
  telefone: {
      type: Sequelize.STRING,
      allowNull: false
  },
  email:{
      type: Sequelize.STRING(99),
      unique: true,
      allowNull: false

  },
  senha: {
      type: Sequelize.STRING(40),
      allowNull: false
  },
  matricula_colaborador: {
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
  },

})
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.dropTable('administrador');
     
  }
};
