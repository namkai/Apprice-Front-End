'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('stores')
    .orderBy('id').then(function(stores){
        console.log(stores)
        res.json(stores);

    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/:id').get(function(req, res, next){
    var storesId =  Number(req.params.id);
    knex('stores').where('id', storesId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("stores")
  .insert({
    name: req.body.name
  })
  .returning(["name", "id"])
  .then(function (stores) {
    res.json(stores[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var storesId =  Number(req.params.id);
  knex("stores")
  .where('id', storesId)
  .update({
    name: req.body.name
  })
  .returning("*")
  .then(function (stores) {
    res.json(stores[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:id").delete(function (req, res, next) {
  let storesId = Number(req.params.id);
  knex("stores")
  .where("id", "=", storesId)
  .del()
  .returning(["name"])
  .then(function (stores) {
    res.json(stores[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});


module.exports = router;
