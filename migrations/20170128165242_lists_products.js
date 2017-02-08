"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('lists_products', function (table) {
  table.increments();
  table.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
  table.integer('list_id').notNullable().references('id').inTable('lists').onDelete('CASCADE');
  table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lists_products');
};
