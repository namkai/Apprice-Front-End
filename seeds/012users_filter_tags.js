"use strict";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_filter_tags').del()
    .then(function () {
      return Promise.all([

        knex('users_filter_tags').insert({
          user_id: 1,
          filter_tag_id: 2
        }).returning('id'),

        knex('users_filter_tags').insert({
          user_id: 3,
          filter_tag_id: 1
        }).returning('id')

      ]);
    });
};
