
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_lists').del()
    .then(function () {
      return Promise.all([
          knex('users_lists').insert({user_id: 1, list_id: 1}),
          knex('users_lists').insert({user_id: 2, list_id: 1}),
          knex('users_lists').insert({user_id: 3, list_id: 1})

      ]);
    });
};
