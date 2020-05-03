const knex = require('../database');
const shortId = require('shortid');

module.exports = {
  async index(req, res, next) {
    try {
      const { catgegoryId, userId } = req.body;
      const query = await knex('tickets');

      if(userId, catgegoryId) {
        query.where({ userId , catgegoryId})
        .join('users', 'users.id', '=', 'tickets.userId')
        .select('tickets.*', 'users.username')
      }

      const tickets = await query
      
      return res.json(tickets);

    } catch (err) {
      
      next(err)
    }
    
  },
  async create(req, res, next) {
    try {      
      const { userId, catgegoryId, ticketId, title, priority, message, status } = req.body;

      const tId = shortId.generate(ticketId);

      await knex('tickets').insert({
        userId,
        catgegoryId,
        ticketId: tId,
        title,
        priority,
        message,
        status
      });

      return res.status(201).send()

    } catch (err) {

      next(err)
    }
  },
  // async update(req, res, next) {
  //   try {
  //     const { name, email } = req.body;
    
  //     const { id } = req.params;
    
  //     await knex('users').update({
  //       name,
  //       email
  //     }).where({ id });
    
  //     return res.status(201).send()

  //   } catch (err) {
    
  //     next(err)
  //   }
  // },
  // async delete(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     await knex('tickets').where({ id }).del()
  //     return res.send()

  //   } catch (err) {
  //     next(err)
  //   }
  // }
}