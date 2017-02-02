"use strict";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products_type_tags').del()
    .then(function () {
      return Promise.all([

        knex('products_type_tags').insert({
          product_id: 1,
          type_tag_id: 2
        }).returning('id'),

        knex('products_type_tags').insert({
          product_id: 6,
          type_tag_id: 1
        }).returning('id'),

        knex('products_type_tags').insert({
          product_id: 81,
          type_tag_id: 1
        }).returning('id'),

        knex('products_type_tags').insert({
          product_id: 82,
          type_tag_id: 1
        }).returning('id'),

        knex('products_type_tags').insert({
          product_id: 83,
          type_tag_id: 1
        }).returning('id'),

        knex('products_type_tags').insert({
          product_id: 88,
          type_tag_id: 2
        }).returning('id'),

        knex('products_type_tags').insert({
          product_id: 89,
          type_tag_id: 2
        }).returning('id'),

        knex('products_type_tags').insert({
          product_id: 90,
          type_tag_id: 2
        }).returning('id'),

        knex('products_type_tags').insert({
          product_id: 91,
          type_tag_id: 2
        }).returning('id')

      ]);
    });
};
