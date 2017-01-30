
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lists_products').del()
    .then(function () {
      return Promise.all([
          knex('lists_products').insert({stores_products_id: 1, list_id: 1}),
          knex('lists_products').insert({stores_products_id: 7, list_id: 1}),
          knex('lists_products').insert({stores_products_id: 10, list_id: 1})
      ]);
    });
};
