const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const CategoryController = require('./controllers/CategoryController');
const TicketController = require('./controllers/TicketController');

routes.get('/', (req, res) => {
  return res.json({ Message:  "Welcome to My API"});
})

routes
  // Users 
  .get('/users', UserController.index)
  .post('/users', UserController.create)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)
  // Categories
  .get('/categories', CategoryController.index)
  .post('/categories', CategoryController.create)
  .put('/categories/:id', CategoryController.update)
  .delete('/categories/:id', CategoryController.delete)
  // Tickets
  .get('/tickets', TicketController.index)
  .post('/tickets', TicketController.create)
  // .put('/tickets/:id', UserController.update)
  // .delete('/tickets/:id', UserController.delete)

module.exports = routes;