"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('stores_products', function (table) {
  table.increments();
  table.integer('store_id').notNullable().references('id').inTable('stores').onDelete('CASCADE');
  table.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
  table.boolean('availability').notNullable();
  table.float('price');
  table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stores_products');
};
