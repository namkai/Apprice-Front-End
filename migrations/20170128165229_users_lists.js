"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_lists', function (table) {
  table.increments();
  table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
  table.integer('list_id').notNullable().references('id').inTable('lists').onDelete('CASCADE');
  table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_lists');
};
