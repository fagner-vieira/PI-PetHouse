'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    const senhaPadrao = bcrypt.hashSync("123456");
     await queryInterface.bulkInsert('administrador', [{
      nome: 'adminUsuário',
      funcao: "admin",
      email: "admin@pethouse.com",
      senha: senhaPadrao,
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('administrador', null, {});
  }
};
  
