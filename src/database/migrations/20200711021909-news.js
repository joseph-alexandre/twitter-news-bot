'use strict';
/**
 * Criação da tabela no banco de dados. O 'up' é a construção da tabela e seus atributos, enquanto o 'down' é quando ocorre algum erro e é necessário
 * dar um rollback. 
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('news', {
      id: {
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('news');
  }
};
