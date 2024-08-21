'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('post_likes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', 
          key: 'id'      
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE' 
      },
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'posts', 
          key: 'id'       
        },
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE' 
      },
      liked_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('post_likes');
  }
};
