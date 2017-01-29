"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function (table) {
  table.increments();
  table.string('upc');
  table.string('plu');
  table.string('name').notNullable().defaultTo('');
  table.string('brand_name').defaultTo('');
  table.string('brand_type').defaultTo('');
  table.string('size').defaultTo('');
  table.string('product_image_url').defaultTo('');
  table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
