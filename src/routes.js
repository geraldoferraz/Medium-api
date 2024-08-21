const express = require('express');

const userController = require('./controllers/UserController')
const postController = require('./controllers/PostsController')

const routes = express.Router();

// ------------ Users -------------

routes.post('/users', userController.register);
routes.get('/users/:id', userController.index)
routes.get('/users', userController.findAll)

// ------------ Posts -------------

routes.post('/users/:user_id/post', postController.postRegister)
routes.get('/users/:user_id/posts', postController.findAll);
routes.put('/users/:user_id/post/:id', postController.postUpdate)


module.exports = routes;