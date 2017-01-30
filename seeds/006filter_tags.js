
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('filter_tags').del()
    .then(function () {
      return Promise.all([

      ]);
    });
};
