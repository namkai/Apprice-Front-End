'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('lists_products')
    .orderBy('id').then(function(lists_products){
        res.json(lists_products);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/:id').get(function(req, res, next){
    var listsProductsId =  Number(req.params.id);
    knex('lists_products').where('id', listsProductsId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("lists_products")
  .insert({
    list_id: req.body.list_id,
    stores_products_id: req.body.stores_products_id
  })
  .returning(["list_id", "stores_products_id", "id"])
  .then(function (lists_products) {
    res.json(lists_products[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var listsProductsId =  Number(req.params.id);
  knex("lists_products")
  .where('id', listsProductsId)
  .update({
    list_id: req.body.list_id,
    stores_products_id: req.body.stores_products_id
  })
  .returning("*")
  .then(function (lists_products) {
    res.json(lists_products[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").delete(function (req, res, next) {
  let listsProductsId = Number(req.params.id);
  knex("lists_products")
  .where("id", "=", listsProductsId)
  .del()
  .returning(["id"])
  .then(function (lists_products) {
    res.json(lists_products[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});


module.exports = router;
