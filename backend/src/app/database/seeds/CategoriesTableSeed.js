
exports.seed = function(knex) {

  return knex('categories').truncate()
    .then(function () {
      return knex('categories').insert([
        { name: 'Requisição'},
        { name: 'Incidente'}
      ]);
    });
};
