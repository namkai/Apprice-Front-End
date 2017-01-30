
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products_type_tags').del()
    .then(function () {
      return Promise.all([

      ]);
    });
};
