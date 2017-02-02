"use strict";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stores_products').del()
    .then(function () {
      return Promise.all([
      knex("stores_products")
        .insert({
          product_id: 6,
          store_id: 1,
          availability: true,
          price: 4.79
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 6,
          store_id: 2,
          availability: true,
          price: 4.59
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 6,
          store_id: 3,
          availability: true,
          price: 3.99
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 6,
          store_id: 4,
          availability: true,
          price: 4.29
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 6,
          store_id: 5,
          availability: false,
          price: 4.29
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 6,
          store_id: 6,
          availability: true,
          price: 3.79
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 8,
          store_id: 3,
          availability: true,
          price: 9.99
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 8,
          store_id: 4,
          availability: true,
          price: 9.49
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 8,
          store_id: 5,
          availability: false,
          price: 11.99
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 15,
          store_id: 1,
          availability: true,
          price: 8.49
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 15,
          store_id: 2,
          availability: true,
          price: 8.29
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 15,
          store_id: 3,
          availability: true,
          price: 7.49
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 15,
          store_id: 4,
          availability: false,
          price: 7.99
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 15,
          store_id: 5,
          availability: true,
          price: 7.99
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 47,
          store_id: 1,
          availability: true,
          price: 1.79
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 47,
          store_id: 2,
          availability: true,
          price: 1.59
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 47,
          store_id: 4,
          availability: true,
          price: 1.29
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 47,
          store_id: 5,
          availability: false,
          price: 1.29
        }).returning('id'),

      knex("stores_products")
        .insert({
          product_id: 47,
          store_id: 7,
          availability: true,
          price: 0.99
        }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 84,
            store_id: 3,
            availability: true,
            price: 2.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 84,
            store_id: 4,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 84,
            store_id: 5,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 84,
            store_id: 6,
            availability: true,
            price: 2.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 91,
            store_id: 2,
            availability: true,
            price: 3.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 91,
            store_id: 3,
            availability: true,
            price: 3.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 91,
            store_id: 4,
            availability: true,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 91,
            store_id: 5,
            availability: true,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 91,
            store_id: 6,
            availability: false,
            price: 3.79
          }).returning('id')
      ]);
    });
};
