
exports.up = knex => knex.schema
.createTable('comments', table => {
  table.increments('id')
  table.integer('ticketId').unsigned().references('id').inTable('tickets')
  table.integer('userId').unsigned().references('id').inTable('users')
  table.string('comment')
  
  table.timestamps(true, true)
});

exports.down = knex => knex.schema
.dropTable('comments');
