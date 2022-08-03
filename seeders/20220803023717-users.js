'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    const senhaPadrao = bcrypt.hashSync("123456");
    await queryInterface.bulkInsert('cliente', [{
     nome_cliente: 'Usuário',
     nome_social: "Usuário",
     telefone: "11986872121",
     email: "lana@hotmail.com",
     senha: senhaPadrao,
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('cliente', null, {});
  }
};
