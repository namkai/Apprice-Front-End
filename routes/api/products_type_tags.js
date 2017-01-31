'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('products_type_tags')
    .orderBy('id').then(function(products_type_tags){
        res.json(products_type_tags);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/:id').get(function(req, res, next){
    var productsTypeTagsId =  Number(req.params.id);
    knex('products_type_tags').where('id', productsTypeTagsId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("products_type_tags")
  .insert({
    name: req.body.name
  })
  .returning(["name", "id"])
  .then(function (products_type_tags) {
    res.json(products_type_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var productsTypeTagsId =  Number(req.params.id);
  knex("products_type_tags")
  .where('id', productsTypeTagsId)
  .update({
    name: req.body.name
  })
  .returning("*")
  .then(function (products_type_tags) {
    res.json(products_type_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").delete(function (req, res, next) {
  let productsTypeTagsId = Number(req.params.id);
  knex("products_type_tags")
  .where("id", "=", productsTypeTagsId)
  .del()
  .returning(["name"])
  .then(function (products_type_tags) {
    res.json(products_type_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});



module.exports = router;
