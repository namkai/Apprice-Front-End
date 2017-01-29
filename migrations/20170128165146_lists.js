"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('lists', function (table) {
  table.increments();
  table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lists');
};
