'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

var calcDistance = function (lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
}

router.route('/').get(function(req, res, next){
    knex('stores')
    .orderBy('id').then(function(stores){
        console.log(stores)
        res.json(stores);

    }).catch(function(err){
        next(new Error(err));
    });
});

// router.route('/search').get(function(req, res, next){
//     let lat = req.query.lat;
//     let lng = req.query.lng;
//     let filtered = [];
//     knex('stores').then(function(storesData){
//
//     }).catch(function(err){
//         next(new Error(err));
//     });
// });

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
