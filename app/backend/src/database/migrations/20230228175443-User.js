'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'username'
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'role'
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'email'
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'password'
    }
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('users');
  }
};
