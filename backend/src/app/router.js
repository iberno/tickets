const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/', (req, res) => {
  return res.json({ Message:  "Welcome to My API"});
})

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

module.exports = routes;