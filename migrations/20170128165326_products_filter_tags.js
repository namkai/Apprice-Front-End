"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('products_filter_tags', function (table) {
  table.increments();
  table.integer('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
  table.integer('filter_tag_id').notNullable().references('id').inTable('filter_tags').onDelete('CASCADE');
  table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products_filter_tags');
};
