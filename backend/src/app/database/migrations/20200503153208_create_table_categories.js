exports.up = knex => knex.schema
  .createTable('categories', table => {
    table.increments('id')
    table.string('name')
      .unique()
    
    table.timestamps(true, true)
  });

exports.down = knex => knex.schema
  .dropTable('categories');
