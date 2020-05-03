
exports.up = knex => knex.schema
  .createTable('tickets', table => {
    table.increments('id')
    table.integer('userId')
      .unsigned()
      .references('users.id')
      .onDelete('CASCADE')
    table.integer('catgegoryId')
      .unsigned()
      .references('categories.id')
      .onDelete('CASCADE')
    table.string('ticketId')
    table.string('title')
    table.string('priority')
    table.text('message')
    table.string('status')
    
    table.timestamps(true, true)
  });

exports.down = knex => knex.schema
  .dropTable('tickets');
