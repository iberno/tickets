exports.seed = function(knex) {

  return knex('tickets').truncate()
    .then(function () {
      return knex('tickets').insert([
        { name: 'John Doe',
          email: 'johndoe@email.com',
          username: 'john',
          password: passHash
        }
      ]);
    });
};
