"use strict";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stores_products').del()
    .then(function () {
      return Promise.all([

        knex("stores_products")
          .insert({
            product_id: 1,
            store_id: 3,
            availability: true,
            price: 2.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 1,
            store_id: 4,
            availability: false,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 1,
            store_id: 5,
            availability: true,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 1,
            store_id: 6,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 2,
            store_id: 3,
            availability: false,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 2,
            store_id: 4,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 2,
            store_id: 5,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 2,
            store_id: 6,
            availability: true,
            price: 2.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 3,
            store_id: 3,
            availability: false,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 3,
            store_id: 4,
            availability: true,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 3,
            store_id: 5,
            availability: true,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 3,
            store_id: 6,
            availability: true,
            price: 3.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 4,
            store_id: 3,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 4,
            store_id: 4,
            availability: true,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 4,
            store_id: 5,
            availability: false,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 4,
            store_id: 6,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 5,
            store_id: 3,
            availability: false,
            price: 4.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 5,
            store_id: 4,
            availability: false,
            price: 4.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 5,
            store_id: 5,
            availability: true,
            price: 4.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 5,
            store_id: 6,
            availability: true,
            price: 4.99
          }).returning('id'),

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
            product_id: 7,
            store_id: 3,
            availability: true,
            price: 9.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 7,
            store_id: 4,
            availability: true,
            price: 9.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 7,
            store_id: 5,
            availability: false,
            price: 9.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 7,
            store_id: 6,
            availability: true,
            price: 11.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 8,
            store_id: 3,
            availability: true,
            price: 13.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 8,
            store_id: 4,
            availability: true,
            price: 13.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 8,
            store_id: 5,
            availability: false,
            price: 13.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 8,
            store_id: 6,
            availability: false,
            price: 14.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 9,
            store_id: 3,
            availability: false,
            price: 16.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 9,
            store_id: 4,
            availability: true,
            price: 16.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 9,
            store_id: 5,
            availability: true,
            price: 16.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 9,
            store_id: 6,
            availability: true,
            price: 18.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 10,
            store_id: 1,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 10,
            store_id: 2,
            availability: true,
            price: 3.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 10,
            store_id: 3,
            availability: false,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 10,
            store_id: 4,
            availability: false,
            price: 3.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 10,
            store_id: 5,
            availability: false,
            price: 3.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 11,
            store_id: 1,
            availability: true,
            price: 7.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 11,
            store_id: 2,
            availability: true,
            price: 7.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 11,
            store_id: 3,
            availability: false,
            price: 7.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 11,
            store_id: 4,
            availability: false,
            price: 7.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 11,
            store_id: 5,
            availability: false,
            price: 7.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 12,
            store_id: 1,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 12,
            store_id: 2,
            availability: true,
            price: 3.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 12,
            store_id: 3,
            availability: false,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 12,
            store_id: 4,
            availability: false,
            price: 3.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 12,
            store_id: 5,
            availability: false,
            price: 3.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 13,
            store_id: 1,
            availability: true,
            price: 7.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 13,
            store_id: 2,
            availability: true,
            price: 7.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 13,
            store_id: 3,
            availability: false,
            price: 7.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 13,
            store_id: 4,
            availability: false,
            price: 7.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 13,
            store_id: 5,
            availability: false,
            price: 7.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 14,
            store_id: 1,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 14,
            store_id: 2,
            availability: true,
            price: 3.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 14,
            store_id: 3,
            availability: false,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 14,
            store_id: 4,
            availability: false,
            price: 3.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 14,
            store_id: 5,
            availability: false,
            price: 3.59
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
            product_id: 16,
            store_id: 1,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 16,
            store_id: 2,
            availability: true,
            price: 3.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 16,
            store_id: 3,
            availability: false,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 16,
            store_id: 4,
            availability: false,
            price: 3.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 16,
            store_id: 5,
            availability: false,
            price: 3.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 17,
            store_id: 1,
            availability: true,
            price: 8.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 17,
            store_id: 2,
            availability: true,
            price: 8.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 17,
            store_id: 3,
            availability: true,
            price: 7.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 17,
            store_id: 4,
            availability: false,
            price: 7.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 17,
            store_id: 5,
            availability: true,
            price: 7.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 18,
            store_id: 3,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 18,
            store_id: 4,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 18,
            store_id: 5,
            availability: false,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 18,
            store_id: 6,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 19,
            store_id: 3,
            availability: false,
            price: 3.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 19,
            store_id: 4,
            availability: false,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 19,
            store_id: 5,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 19,
            store_id: 6,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 20,
            store_id: 3,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 20,
            store_id: 4,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 20,
            store_id: 5,
            availability: false,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 20,
            store_id: 6,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 21,
            store_id: 3,
            availability: false,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 21,
            store_id: 4,
            availability: false,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 21,
            store_id: 5,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 21,
            store_id: 6,
            availability: true,
            price: 4.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 22,
            store_id: 3,
            availability: true,
            price: 6.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 22,
            store_id: 4,
            availability: true,
            price: 6.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 22,
            store_id: 5,
            availability: true,
            price: 6.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 22,
            store_id: 6,
            availability: false,
            price: 6.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 23,
            store_id: 2,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 23,
            store_id: 3,
            availability: false,
            price: 2.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 23,
            store_id: 4,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 23,
            store_id: 5,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 23,
            store_id: 6,
            availability: false,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 23,
            store_id: 2,
            availability: true,
            price: 2.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 24,
            store_id: 3,
            availability: false,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 24,
            store_id: 4,
            availability: true,
            price: 2.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 24,
            store_id: 5,
            availability: true,
            price: 2.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 24,
            store_id: 6,
            availability: false,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 25,
            store_id: 2,
            availability: true,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 25,
            store_id: 3,
            availability: false,
            price: 3.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 25,
            store_id: 4,
            availability: true,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 25,
            store_id: 5,
            availability: true,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 25,
            store_id: 6,
            availability: true,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 26,
            store_id: 2,
            availability: true,
            price: 1.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 26,
            store_id: 3,
            availability: true,
            price: 1.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 26,
            store_id: 4,
            availability: true,
            price: 0.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 26,
            store_id: 5,
            availability: true,
            price: 0.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 26,
            store_id: 6,
            availability: true,
            price: 1.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 27,
            store_id: 2,
            availability: true,
            price: 2.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 27,
            store_id: 3,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 27,
            store_id: 4,
            availability: true,
            price: 1.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 27,
            store_id: 5,
            availability: true,
            price: 1.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 27,
            store_id: 6,
            availability: true,
            price: 1.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 28,
            store_id: 1,
            availability: true,
            price: 1.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 28,
            store_id: 2,
            availability: true,
            price: 1.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 28,
            store_id: 3,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 28,
            store_id: 4,
            availability: true,
            price: 1.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 28,
            store_id: 5,
            availability: true,
            price: 1.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 28,
            store_id: 6,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 28,
            store_id: 7,
            availability: false,
            price: 1.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 29,
            store_id: 1,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 29,
            store_id: 2,
            availability: true,
            price: 1.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 29,
            store_id: 4,
            availability: false,
            price: 1.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 29,
            store_id: 5,
            availability: true,
            price: 1.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 29,
            store_id: 7,
            availability: false,
            price: 1.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 30,
            store_id: 1,
            availability: true,
            price: 1.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 30,
            store_id: 2,
            availability: true,
            price: 1.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 30,
            store_id: 4,
            availability: true,
            price: 1.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 30,
            store_id: 5,
            availability: false,
            price: 1.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 30,
            store_id: 7,
            availability: false,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 31,
            store_id: 3,
            availability: true,
            price: 2.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 31,
            store_id: 4,
            availability: false,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 31,
            store_id: 5,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 31,
            store_id: 6,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 32,
            store_id: 3,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 32,
            store_id: 4,
            availability: true,
            price: 3.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 32,
            store_id: 5,
            availability: false,
            price: 3.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 32,
            store_id: 6,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 33,
            store_id: 3,
            availability: true,
            price: 2.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 33,
            store_id: 4,
            availability: false,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 33,
            store_id: 5,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 33,
            store_id: 6,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 34,
            store_id: 3,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 34,
            store_id: 4,
            availability: true,
            price: 3.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 34,
            store_id: 5,
            availability: false,
            price: 3.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 34,
            store_id: 6,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 35,
            store_id: 1,
            availability: true,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 35,
            store_id: 2,
            availability: false,
            price: 3.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 35,
            store_id: 3,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 35,
            store_id: 4,
            availability: true,
            price: 3.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 35,
            store_id: 5,
            availability: true,
            price: 3.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 36,
            store_id: 2,
            availability: true,
            price: 2.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 36,
            store_id: 3,
            availability: true,
            price: 1.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 36,
            store_id: 4,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 36,
            store_id: 5,
            availability: false,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 36,
            store_id: 6,
            availability: true,
            price: 1.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 37,
            store_id: 2,
            availability: true,
            price: 3.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 37,
            store_id: 3,
            availability: true,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 37,
            store_id: 4,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 37,
            store_id: 5,
            availability: false,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 37,
            store_id: 6,
            availability: true,
            price: 2.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 38,
            store_id: 2,
            availability: true,
            price: 1.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 38,
            store_id: 3,
            availability: true,
            price: 1.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 38,
            store_id: 4,
            availability: true,
            price: 1.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 38,
            store_id: 5,
            availability: false,
            price: 1.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 38,
            store_id: 6,
            availability: true,
            price: 1.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 39,
            store_id: 2,
            availability: true,
            price: 1.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 39,
            store_id: 3,
            availability: true,
            price: 1.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 39,
            store_id: 4,
            availability: true,
            price: 1.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 39,
            store_id: 5,
            availability: false,
            price: 1.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 39,
            store_id: 6,
            availability: true,
            price: 0.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 40,
            store_id: 2,
            availability: true,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 40,
            store_id: 3,
            availability: true,
            price: 2.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 40,
            store_id: 4,
            availability: true,
            price: 3.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 40,
            store_id: 5,
            availability: false,
            price: 3.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 40,
            store_id: 6,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 41,
            store_id: 2,
            availability: true,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 41,
            store_id: 3,
            availability: false,
            price: 3.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 41,
            store_id: 4,
            availability: false,
            price: 3.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 41,
            store_id: 5,
            availability: false,
            price: 3.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 41,
            store_id: 6,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 42,
            store_id: 2,
            availability: true,
            price: 5.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 42,
            store_id: 3,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 42,
            store_id: 4,
            availability: true,
            price: 4.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 42,
            store_id: 5,
            availability: true,
            price: 4.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 42,
            store_id: 6,
            availability: true,
            price: 4.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 43,
            store_id: 1,
            availability: true,
            price: 5.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 43,
            store_id: 2,
            availability: true,
            price: 6.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 43,
            store_id: 4,
            availability: false,
            price: 6.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 43,
            store_id: 5,
            availability: true,
            price: 6.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 44,
            store_id: 1,
            availability: true,
            price: 8.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 44,
            store_id: 2,
            availability: false,
            price: 7.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 44,
            store_id: 4,
            availability: false,
            price: 9.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 44,
            store_id: 5,
            availability: false,
            price: 9.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 44,
            store_id: 6,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 45,
            store_id: 1,
            availability: true,
            price: 1.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 45,
            store_id: 2,
            availability: true,
            price: 1.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 45,
            store_id: 4,
            availability: true,
            price: 1.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 45,
            store_id: 5,
            availability: false,
            price: 1.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 45,
            store_id: 7,
            availability: true,
            price: 0.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 46,
            store_id: 1,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 46,
            store_id: 2,
            availability: false,
            price: 1.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 46,
            store_id: 4,
            availability: false,
            price: 1.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 46,
            store_id: 5,
            availability: true,
            price: 1.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 46,
            store_id: 7,
            availability: true,
            price: 1.09
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
            product_id: 48,
            store_id: 2,
            availability: true,
            price: 3.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 48,
            store_id: 3,
            availability: true,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 48,
            store_id: 4,
            availability: true,
            price: 3.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 48,
            store_id: 5,
            availability: false,
            price: 3.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 48,
            store_id: 6,
            availability: true,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 49,
            store_id: 2,
            availability: true,
            price: 3.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 49,
            store_id: 3,
            availability: false,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 49,
            store_id: 4,
            availability: true,
            price: 3.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 49,
            store_id: 5,
            availability: true,
            price: 3.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 49,
            store_id: 6,
            availability: true,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 50,
            store_id: 1,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 50,
            store_id: 2,
            availability: true,
            price: 5.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 50,
            store_id: 4,
            availability: false,
            price: 5.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 50,
            store_id: 5,
            availability: true,
            price: 5.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 50,
            store_id: 7,
            availability: true,
            price: 4.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 51,
            store_id: 1,
            availability: true,
            price: 5.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 51,
            store_id: 2,
            availability: true,
            price: 5.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 51,
            store_id: 3,
            availability: false,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 51,
            store_id: 4,
            availability: true,
            price: 5.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 51,
            store_id: 5,
            availability: true,
            price: 5.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 52,
            store_id: 2,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 52,
            store_id: 3,
            availability: true,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 52,
            store_id: 4,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 52,
            store_id: 5,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 52,
            store_id: 6,
            availability: true,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 53,
            store_id: 2,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 53,
            store_id: 3,
            availability: true,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 53,
            store_id: 4,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 53,
            store_id: 5,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 53,
            store_id: 6,
            availability: true,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 54,
            store_id: 2,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 54,
            store_id: 3,
            availability: true,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 54,
            store_id: 4,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 54,
            store_id: 5,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 54,
            store_id: 6,
            availability: true,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 55,
            store_id: 3,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 55,
            store_id: 4,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 55,
            store_id: 5,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 55,
            store_id: 6,
            availability: true,
            price: 2.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 56,
            store_id: 3,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 56,
            store_id: 4,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 56,
            store_id: 5,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 56,
            store_id: 6,
            availability: true,
            price: 2.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 57,
            store_id: 3,
            availability: true,
            price: 0.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 57,
            store_id: 4,
            availability: true,
            price: 1.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 57,
            store_id: 5,
            availability: true,
            price: 1.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 57,
            store_id: 6,
            availability: true,
            price: 0.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 58,
            store_id: 1,
            availability: true,
            price: 1.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 58,
            store_id: 2,
            availability: false,
            price: 1.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 58,
            store_id: 3,
            availability: false,
            price: 1.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 58,
            store_id: 4,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 58,
            store_id: 5,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 59,
            store_id: 3,
            availability: true,
            price: 0.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 59,
            store_id: 4,
            availability: true,
            price: 0.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 59,
            store_id: 5,
            availability: true,
            price: 0.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 59,
            store_id: 6,
            availability: true,
            price: 0.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 60,
            store_id: 3,
            availability: true,
            price: 1.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 60,
            store_id: 4,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 60,
            store_id: 5,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 60,
            store_id: 6,
            availability: true,
            price: 1.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 61,
            store_id: 1,
            availability: true,
            price: 0.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 61,
            store_id: 2,
            availability: true,
            price: 0.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 61,
            store_id: 4,
            availability: true,
            price: 0.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 61,
            store_id: 5,
            availability: true,
            price: 0.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 61,
            store_id: 6,
            availability: true,
            price: 0.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 62,
            store_id: 3,
            availability: true,
            price: 1.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 62,
            store_id: 4,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 62,
            store_id: 5,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 62,
            store_id: 6,
            availability: true,
            price: 1.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 63,
            store_id: 3,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 63,
            store_id: 4,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 63,
            store_id: 5,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 63,
            store_id: 6,
            availability: false,
            price: 2.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 64,
            store_id: 3,
            availability: true,
            price: 1.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 64,
            store_id: 4,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 64,
            store_id: 5,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 64,
            store_id: 6,
            availability: true,
            price: 1.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 65,
            store_id: 3,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 65,
            store_id: 4,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 65,
            store_id: 5,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 65,
            store_id: 6,
            availability: false,
            price: 2.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 66,
            store_id: 1,
            availability: true,
            price: 2.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 66,
            store_id: 3,
            availability: false,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 66,
            store_id: 4,
            availability: true,
            price: 2.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 66,
            store_id: 5,
            availability: true,
            price: 2.09
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 67,
            store_id: 2,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 67,
            store_id: 3,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 67,
            store_id: 4,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 67,
            store_id: 5,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 67,
            store_id: 6,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 68,
            store_id: 2,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 68,
            store_id: 3,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 68,
            store_id: 4,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 68,
            store_id: 5,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 68,
            store_id: 6,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 69,
            store_id: 2,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 69,
            store_id: 3,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 69,
            store_id: 4,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 69,
            store_id: 5,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 69,
            store_id: 6,
            availability: true,
            price: 1.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 70,
            store_id: 1,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 70,
            store_id: 2,
            availability: true,
            price: 2.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 70,
            store_id: 3,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 70,
            store_id: 4,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 70,
            store_id: 5,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 71,
            store_id: 1,
            availability: true,
            price: 5.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 71,
            store_id: 2,
            availability: true,
            price: 5.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 71,
            store_id: 3,
            availability: false,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 71,
            store_id: 4,
            availability: true,
            price: 5.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 71,
            store_id: 5,
            availability: true,
            price: 5.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 72,
            store_id: 1,
            availability: true,
            price: 5.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 72,
            store_id: 2,
            availability: false,
            price: 5.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 72,
            store_id: 3,
            availability: false,
            price: 5.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 72,
            store_id: 4,
            availability: true,
            price: 6.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 72,
            store_id: 5,
            availability: true,
            price: 6.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 73,
            store_id: 1,
            availability: true,
            price: 6.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 73,
            store_id: 2,
            availability: false,
            price: 6.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 73,
            store_id: 3,
            availability: true,
            price: 6.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 73,
            store_id: 4,
            availability: true,
            price: 7.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 73,
            store_id: 5,
            availability: true,
            price: 7.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 74,
            store_id: 3,
            availability: true,
            price: 3.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 74,
            store_id: 4,
            availability: false,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 74,
            store_id: 5,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 74,
            store_id: 6,
            availability: true,
            price: 4.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 75,
            store_id: 1,
            availability: true,
            price: 4.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 75,
            store_id: 2,
            availability: true,
            price: 4.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 75,
            store_id: 3,
            availability: false,
            price: 4.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 75,
            store_id: 4,
            availability: true,
            price: 4.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 75,
            store_id: 5,
            availability: true,
            price: 4.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 76,
            store_id: 1,
            availability: true,
            price: 4.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 76,
            store_id: 2,
            availability: true,
            price: 4.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 76,
            store_id: 3,
            availability: false,
            price: 4.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 76,
            store_id: 4,
            availability: true,
            price: 4.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 76,
            store_id: 5,
            availability: true,
            price: 4.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 77,
            store_id: 2,
            availability: true,
            price: 3.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 77,
            store_id: 3,
            availability: true,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 77,
            store_id: 4,
            availability: false,
            price: 3.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 77,
            store_id: 5,
            availability: true,
            price: 3.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 77,
            store_id: 6,
            availability: true,
            price: 3.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 78,
            store_id: 2,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 78,
            store_id: 3,
            availability: true,
            price: 2.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 78,
            store_id: 4,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 78,
            store_id: 5,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 78,
            store_id: 6,
            availability: true,
            price: 2.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 79,
            store_id: 2,
            availability: true,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 79,
            store_id: 3,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 79,
            store_id: 4,
            availability: true,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 79,
            store_id: 5,
            availability: true,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 79,
            store_id: 6,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 80,
            store_id: 2,
            availability: true,
            price: 3.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 80,
            store_id: 3,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 80,
            store_id: 4,
            availability: true,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 80,
            store_id: 5,
            availability: true,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 80,
            store_id: 6,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 81,
            store_id: 2,
            availability: true,
            price: 5.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 81,
            store_id: 3,
            availability: true,
            price: 5.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 81,
            store_id: 4,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 81,
            store_id: 5,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 81,
            store_id: 6,
            availability: true,
            price: 5.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 82,
            store_id: 1,
            availability: true,
            price: 5.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 82,
            store_id: 2,
            availability: true,
            price: 6.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 82,
            store_id: 4,
            availability: false,
            price: 5.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 82,
            store_id: 5,
            availability: false,
            price: 5.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 83,
            store_id: 2,
            availability: false,
            price: 5.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 83,
            store_id: 3,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 83,
            store_id: 4,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 83,
            store_id: 5,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 83,
            store_id: 6,
            availability: true,
            price: 4.99
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
            product_id: 85,
            store_id: 3,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 85,
            store_id: 4,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 85,
            store_id: 5,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 85,
            store_id: 6,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 86,
            store_id: 3,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 86,
            store_id: 4,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 86,
            store_id: 5,
            availability: true,
            price: 2.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 86,
            store_id: 6,
            availability: true,
            price: 3.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 87,
            store_id: 3,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 87,
            store_id: 4,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 87,
            store_id: 5,
            availability: true,
            price: 1.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 87,
            store_id: 6,
            availability: true,
            price: 2.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 88,
            store_id: 1,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 88,
            store_id: 2,
            availability: false,
            price: 2.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 88,
            store_id: 4,
            availability: true,
            price: 2.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 88,
            store_id: 5,
            availability: true,
            price: 2.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 89,
            store_id: 1,
            availability: true,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 89,
            store_id: 2,
            availability: true,
            price: 2.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 89,
            store_id: 4,
            availability: true,
            price: 2.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 89,
            store_id: 5,
            availability: true,
            price: 2.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 90,
            store_id: 3,
            availability: true,
            price: 1.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 90,
            store_id: 4,
            availability: false,
            price: 1.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 90,
            store_id: 5,
            availability: true,
            price: 1.59
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 90,
            store_id: 6,
            availability: true,
            price: 1.99
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
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 92,
            store_id: 1,
            availability: true,
            price: 3.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 92,
            store_id: 2,
            availability: true,
            price: 3.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 92,
            store_id: 3,
            availability: true,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 92,
            store_id: 4,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 92,
            store_id: 5,
            availability: false,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 93,
            store_id: 1,
            availability: true,
            price: 3.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 93,
            store_id: 2,
            availability: true,
            price: 3.19
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 93,
            store_id: 3,
            availability: true,
            price: 3.49
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 93,
            store_id: 4,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 93,
            store_id: 5,
            availability: true,
            price: 3.79
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 94,
            store_id: 3,
            availability: true,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 94,
            store_id: 4,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 94,
            store_id: 5,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 94,
            store_id: 6,
            availability: true,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 95,
            store_id: 3,
            availability: true,
            price: 2.69
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 95,
            store_id: 4,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 95,
            store_id: 5,
            availability: true,
            price: 2.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 95,
            store_id: 6,
            availability: true,
            price: 2.89
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 96,
            store_id: 3,
            availability: true,
            price: 5.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 96,
            store_id: 4,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 96,
            store_id: 5,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 96,
            store_id: 6,
            availability: true,
            price: 5.39
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 97,
            store_id: 3,
            availability: true,
            price: 5.29
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 97,
            store_id: 4,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 97,
            store_id: 5,
            availability: true,
            price: 4.99
          }).returning('id'),

        knex("stores_products")
          .insert({
            product_id: 97,
            store_id: 6,
            availability: false,
            price: 5.39
          }).returning('id')
      ]);
    });
};
