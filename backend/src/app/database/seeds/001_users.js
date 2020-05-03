const bcrypt = require('bcryptjs');
const password = 'password';
const passHash = bcrypt.hashSync(password, 8);

exports.seed = function(knex) {

  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        { name: 'John Doe',
          email: 'johndoe@email.com',
          username: 'john',
          password: passHash
        }
      ]);
    });
};
