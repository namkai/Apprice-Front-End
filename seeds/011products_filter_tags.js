"use strict";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products_filter_tags').del()
    .then(function () {
      return Promise.all([

        knex('products_filter_tags').insert({
          product_id: 1,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 2,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 4,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 6,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 7,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 10,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 11,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 11,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 12,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 12,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 13,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 14,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 15,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 16,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 17,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 19,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 20,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 23,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 27,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 28,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 29,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 31,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 36,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 38,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 43,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 44,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 45,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 46,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 47,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 48,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 51,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 62,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 67,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 71,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 74,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 75,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 76,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 79,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 82,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 84,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 86,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 87,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 88,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 89,
          filter_tag_id: 2
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 90,
          filter_tag_id: 1
        }).returning('id'),

        knex('products_filter_tags').insert({
          product_id: 94,
          filter_tag_id: 1
        }).returning('id')

      ]);
    });
};
