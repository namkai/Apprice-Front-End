'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('users')
    .orderBy('id').then(function(users){
        res.json(users);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/:id').get(function(req, res, next){
    var usersId =  Number(req.params.id);
    knex('users').where('id', usersId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("users")
  .insert({
    name: req.body.name
  })
  .returning(["name", "id"])
  .then(function (users) {
    res.json(users[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var usersId =  Number(req.params.id);
  knex("users")
  .where('id', usersId)
  .update({
    name: req.body.name
  })
  .returning("*")
  .then(function (users) {
    res.json(users[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").delete(function (req, res, next) {
  let usersId = Number(req.params.id);
  knex("users")
  .where("id", "=", usersId)
  .del()
  .returning(["name"])
  .then(function (users) {
    res.json(users[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});


module.exports = router;
