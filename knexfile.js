'use strict';


module.exports = {

  test: {
    client: 'postgres',
    connection: 'postgres://localhost/apprice_test',
    seeds: {
      directory: './seeds'
  }
  },

  development: {
    client: 'postgres',
    connection: 'postgres://localhost/apprice'
  }

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,

  }
  };
