
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('lists').insert({name: 'elliezList'})

      ]);
    });
};
