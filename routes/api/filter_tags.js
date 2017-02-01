'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('filter_tags')
    .orderBy('id').then(function(filter_tags){
        res.json(filter_tags);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/:id').get(function(req, res, next){
    var filterTagsId =  Number(req.params.id);
    knex('filter_tags').where('id', filterTagsId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("filter_tags")
  .insert({
    name: req.body.name
  })
  .returning(["name", "id"])
  .then(function (filter_tags) {
    res.json(filter_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var filterTagsId =  Number(req.params.id);
  knex("filter_tags")
  .where('id', filterTagsId)
  .update({
    name: req.body.name
  })
  .returning("*")
  .then(function (filter_tags) {
    res.json(filter_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").delete(function (req, res, next) {
  let filterTagsId = Number(req.params.id);
  knex("filter_tags")
  .where("id", "=", filterTagsId)
  .del()
  .returning(["name"])
  .then(function (filter_tags) {
    res.json(filter_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});


module.exports = router;
