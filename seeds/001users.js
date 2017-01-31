"use strict";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          hashed_password: '123',
          first_name: 'ellie',
          last_name: 'howard',
          email: 'elliethedeveloper@gmail.com'}),

        knex('users').insert({
          hashed_password: '123',
          first_name: 'victor',
          last_name: 'constantino',
          email: 'victorthedev@gmail.com'}),

        knex('users').insert({
          hashed_password: '123',
          first_name: 'namkai',
          last_name: 'fairfield',
          email: 'namkaithedev@gmail.com'})
          
      ]);
    });
};
