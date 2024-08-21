const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'users',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        });
    }

    static associate(models) {
        this.hasMany(models.Post, { foreignKey: 'user_id', as: 'posts' }); // Um usuário pode ter muitos posts --> 1-N
        //this.hasMany(models.PostLike, { foreignKey: 'user_id', as: 'likes' }); // Um usuário pode ter muitas curtidas --> 1-N
    }
}

module.exports = User;
