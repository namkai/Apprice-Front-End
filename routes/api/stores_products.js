'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('stores_products')
    .orderBy('id').then(function(stores_products){
        res.json(stores_products);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/:id').get(function(req, res, next){
    var storesProductsId =  Number(req.params.id);
    knex('stores_products').where('id', storesProductsId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("stores_products")
  .insert({
    name: req.body.name
  })
  .returning(["name", "id"])
  .then(function (stores_products) {
    res.json(stores_products[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var storesProductsId =  Number(req.params.id);
  knex("stores_products")
  .where('id', storesProductsId)
  .update({
    name: req.body.name
  })
  .returning("*")
  .then(function (stores_products) {
    res.json(stores_products[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").delete(function (req, res, next) {
  let storesProductsId = Number(req.params.id);
  knex("stores_products")
  .where("id", "=", storesProductsId)
  .del()
  .returning(["name"])
  .then(function (stores_products) {
    res.json(stores_products[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});


module.exports = router;
