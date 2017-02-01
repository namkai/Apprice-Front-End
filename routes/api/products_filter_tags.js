'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('products_filter_tags')
    .orderBy('id').then(function(products_filter_tags){
        res.json(products_filter_tags);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/:id').get(function(req, res, next){
    var productsFilterTagsId =  Number(req.params.id);
    knex('products_filter_tags').where('id', productsFilterTagsId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("products_filter_tags")
  .insert({
    name: req.body.name
  })
  .returning(["name", "id"])
  .then(function (products_filter_tags) {
    res.json(products_filter_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var productsFilterTagsId =  Number(req.params.id);
  knex("products_filter_tags")
  .where('id', productsFilterTagsId)
  .update({
    name: req.body.name
  })
  .returning("*")
  .then(function (products_filter_tags) {
    res.json(products_filter_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").delete(function (req, res, next) {
  let productsFilterTagsId = Number(req.params.id);
  knex("products_filter_tags")
  .where("id", "=", productsFilterTagsId)
  .del()
  .returning(["name"])
  .then(function (products_filter_tags) {
    res.json(products_filter_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});


module.exports = router;
