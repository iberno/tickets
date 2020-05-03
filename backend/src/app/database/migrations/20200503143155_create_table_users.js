
exports.up = knex => knex.schema
  .createTable('users', table => {
    table.increments('id')
    table.string('name')
    table.string('email')
      .unique()
    table.string('username')
    table.string('password')
    
    table.timestamps(true, true)
  });

exports.down = knex => knex.schema
  .dropTable('users');
