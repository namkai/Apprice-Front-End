"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_filter_tags', function (table) {
  table.increments();
  table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
  table.integer('filter_tag_id').notNullable().references('id').inTable('filter_tags').onDelete('CASCADE');
  table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_filter_tags');
};
