'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('type_tags')
    .orderBy('id').then(function(type_tags){
        res.json(type_tags);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/search').get(function(req, res, next) {
    let tagName =  req.query.name.toLowerCase();
    let filtered = [];
    let taggedProducts = [];

    knex("type_tags")
    .orderBy('id').then(function(allTags){

        allTags.forEach(function(curTag){
            var curName = curTag.name.toLowerCase()
            if(curName === tagName){
                filtered.push(curTag.id)
            }
        })
        return knex("products_type_tags").whereIn('type_tag_id', filtered)
    }).then(function(filteredProducts){

        filteredProducts.forEach(function(curProduct){
            taggedProducts.push(curProduct.product_id)
        })
        return knex('products').whereIn('id', taggedProducts)
    }).then(function(output){
        res.json(output)
    }).catch(function (err) {
        next(new Error(err));
      });
});

router.route('/:id').get(function(req, res, next){
    var typeTagsId =  Number(req.params.id);
    knex('type_tags').where('id', typeTagsId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("type_tags")
  .insert({
    name: req.body.name
  })
  .returning(["name", "id"])
  .then(function (type_tags) {
    res.json(type_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var typeTagsId =  Number(req.params.id);
  knex("type_tags")
  .where('id', typeTagsId)
  .update({
    name: req.body.name
  })
  .returning("*")
  .then(function (type_tags) {
    res.json(type_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});



router.route("/:id").delete(function (req, res, next) {
  let typeTagsId = Number(req.params.id);
  knex("type_tags")
  .where("id", "=", typeTagsId)
  .del()
  .returning(["name"])
  .then(function (type_tags) {
    res.json(type_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});


module.exports = router;
