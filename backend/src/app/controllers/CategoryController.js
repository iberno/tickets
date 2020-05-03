const knex = require('../database');

module.exports = {
  async index(req, res) {
    const categories = await knex('categories');
    
    return res.json(categories);
  },
  async create(req, res, next) {
    try {
      const { name } = req.body;

      await knex('categories').insert({
        name,
      });

      return res.status(201).send()

    } catch (err) {

      next(err)
    }
  },
  async update(req, res, next) {
    try {
      const { name } = req.body;
    
      const { id } = req.params;
    
      await knex('categories').update({
        name,
      }).where({ id });
    
      return res.status(201).send()

    } catch (err) {
    
      next(err)
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await knex('categories').where({ id }).del()
      return res.send()

    } catch (err) {
      next(err)
    }
  }
}