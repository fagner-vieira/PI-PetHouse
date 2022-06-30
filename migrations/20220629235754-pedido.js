'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('pedido', {  
        id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    }
   })
     
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('pedido');
     
  }
};
