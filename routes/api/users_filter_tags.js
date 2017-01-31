'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('users_filter_tags')
    .orderBy('id').then(function(users_filter_tags){
        res.json(users_filter_tags);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/:id').get(function(req, res, next){
    var usersFilterTagsId =  Number(req.params.id);
    knex('users_filter_tags').where('id', usersFilterTagsId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("users_filter_tags")
  .insert({
    name: req.body.name
  })
  .returning(["name", "id"])
  .then(function (users_filter_tags) {
    res.json(users_filter_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var usersFilterTagsId =  Number(req.params.id);
  knex("users_filter_tags")
  .where('id', usersFilterTagsId)
  .update({
    name: req.body.name
  })
  .returning("*")
  .then(function (users_filter_tags) {
    res.json(users_filter_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").delete(function (req, res, next) {
  let usersFilterTagsId = Number(req.params.id);
  knex("users_filter_tags")
  .where("id", "=", usersFilterTagsId)
  .del()
  .returning(["name"])
  .then(function (users_filter_tags) {
    res.json(users_filter_tags[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});


module.exports = router;
