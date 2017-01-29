"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('stores', function (table) {
  table.increments();
  table.string('name').notNullable().defaultTo('');
  table.text('address').notNullable().defaultTo('');
  table.string('phone_number').notNullable().defaultTo('');
  table.string('store_url').notNullable().defaultTo('');
  table.string('store_image_url').notNullable().defaultTo('');
  table.decimal('latitude', 16, 12).notNullable().defaultTo(0);
  table.decimal('longitude', 16, 12).notNullable().defaultTo(0);
  table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stores');
};
