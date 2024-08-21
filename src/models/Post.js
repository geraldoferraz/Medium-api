const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      total_likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      available_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    }, {
      sequelize,
      tableName: 'posts',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }); //Cada post é associado a um unico user --> 1-N
    //this.hasMany(models.PostLike, { foreignKey: 'post_id', as: 'likes' }); //Um post pode ter muitas curtidas --> 1-N
  }
}

module.exports = Post;
