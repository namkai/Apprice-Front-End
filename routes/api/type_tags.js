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
