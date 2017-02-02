"use strict";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('filter_tags').del()
    .then(function () {
      return Promise.all([

        knex('filter_tags').insert({
          name: "most_popular"
        }).returning('id'),

        knex('filter_tags').insert({
          name: "organic"
        }).returning('id'),

        knex('filter_tags').insert({
          name: "vegetarian"
        }).returning('id'),

        knex('filter_tags').insert({
          name: "vegan"
        }).returning('id')

      ]);
    });
};
