
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Jon Doe', email: 'jondoe@email.com'},
        {name: 'Jan Doe', email: 'janedoe@email.com'},
        {name: 'Mary Doe', email: 'marydoe@email.com'}
      ]);
    });
};
