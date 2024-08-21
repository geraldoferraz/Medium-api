'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('posts', 'available_at', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('posts', 'available_at', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: null 
    });
  }
};
