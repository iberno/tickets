const knex = require('../database');
const { hashSync } = require('bcryptjs');

module.exports = {
  async index(req, res) {
    const users = await knex('users');
    
    return res.json(users);
  },
  async create(req, res, next) {
    try {
      const { name, email, username, password } = req.body;

      const passwd = hashSync(password, 8);

      const user = await knex('users').insert({
        name,
        email,
        username,
        password: passwd,
      });

      return res.status(201).send()

    } catch (err) {

      next(err)
    }
  },
  async update(req, res, next) {
    try {
      const { name, email } = req.body;
    
      const { id } = req.params;
    
      await knex('users').update({
        name,
        email
      }).where({ id });
    
      return res.status(201).send()

    } catch (err) {
    
      next(err)
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await knex('users').where({ id }).del()
      return res.send()

    } catch (err) {
      next(err)
    }
  }
}