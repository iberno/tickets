
exports.seed = function(knex) {

  return knex('comments').truncate()
    .then(function () {
      return knex('comments').insert([
        { name: 'John Doe',
          email: 'johndoe@email.com',
          username: 'john',
          password: passHash
        }
      ]);
    });
};
