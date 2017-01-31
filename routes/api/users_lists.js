'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('users_lists')
    .orderBy('id').then(function(users_lists){
        res.json(users_lists);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/:id').get(function(req, res, next){
    var usersListsId =  Number(req.params.id);
    knex('users_lists').where('id', usersListsId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("users_lists")
  .insert({
    name: req.body.name
  })
  .returning(["name", "id"])
  .then(function (users_lists) {
    res.json(users_lists[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var usersListsId =  Number(req.params.id);
  knex("users_lists")
  .where('id', usersListsId)
  .update({
    name: req.body.name
  })
  .returning("*")
  .then(function (users_lists) {
    res.json(users_lists[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").delete(function (req, res, next) {
  let usersListsId = Number(req.params.id);
  knex("users_lists")
  .where("id", "=", usersListsId)
  .del()
  .returning(["name"])
  .then(function (users_lists) {
    res.json(users_lists[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});


module.exports = router;
