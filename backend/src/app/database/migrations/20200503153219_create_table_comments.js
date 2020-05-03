
exports.up = knex => knex.schema
.createTable('comments', table => {
  table.increments('id')
  table.integer('ticketId')
    .unsigned()
    .references('tickets.id')
  table.integer('userId')
    .unsigned()
    .references('users.id')
  table.string('comment')
  
  table.timestamps(true, true)
});

exports.down = knex => knex.schema
.dropTable('comments');
