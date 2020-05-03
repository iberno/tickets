const bcrypt = require('bcryptjs');
const password = 'password';
const passHash = bcrypt.hashSync(password, 8);

exports.seed = function(knex) {

  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        { name: 'Jon Doe',
          email: 'jondoe@email.com',
          password: passHash
        }
      ]);
    });
};
