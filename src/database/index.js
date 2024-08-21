const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Post = require('../models/Post');

const connectionDB = new Sequelize(dbConfig); // Conectando ao banco de dados

User.init(connectionDB); // Inicializando o modelo User com a conexão
Post.init(connectionDB);

User.associate(connectionDB.models);
Post.associate(connectionDB.models);

module.exports = connectionDB;
