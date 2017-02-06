
 "use strict";

const users = require ("./api/users");
const lists = require ("./api/lists");
const products = require ("./api/products");
const stores = require ("./api/stores");
const type_tags = require ("./api/type_tags");
const filter_tags = require ("./api/filter_tags");
const users_lists = require ("./api/users_lists");
const lists_products = require ("./api/lists_products");
const stores_products = require ("./api/stores_products");
const products_type_tags = require ("./api/products_type_tags");
const products_filter_tags = require ("./api/products_filter_tags");
const users_filter_tags = require ("./api/users_filter_tags");
const appriceme = require ("./api/appriceme")
const test = require ("./api/test")


module.exports = {
  users,
  lists,
  products,
  stores,
  type_tags,
  filter_tags,
  users_lists,
  lists_products,
  stores_products,
  products_type_tags,
  products_filter_tags,
  users_filter_tags,
  appriceme,
  test
};
