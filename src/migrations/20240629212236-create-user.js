'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [8, 50]
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};