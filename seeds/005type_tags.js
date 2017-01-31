"use strict";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('type_tags').del()
    .then(function () {
      return Promise.all([

        knex('type_tags').insert({
          name: "eggs"
        }).returning('id'),

        knex('type_tags').insert({
          name: "bread"
        }).returning('id')

      ]);
    });
};
