const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ Message:  "Welcome to My API"});
})

module.exports = routes;