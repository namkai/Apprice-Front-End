'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('products')
    .orderBy('id').then(function(products){
        res.json(products);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route('/search').get(function(req, res, next) {
    let productName =  req.query.name.toLowerCase();
    var filtered = [];
    knex("products")
    .orderBy('id').then(function(allProducts){

        allProducts.forEach(function(curProduct){
            var curName = curProduct.name.toLowerCase()
            if(curName.includes(productName)){
                filtered.push(curProduct.id)
            }
        })
        return knex("products").whereIn('id', filtered)
    }).then(function(filteredProducts){
        res.json(filteredProducts)
    }).catch(function (err) {
        next(new Error(err));
      });
});

router.route('/popular').get(function(req, res, next){
    let popular = [];
    knex('products_filter_tags').where('filter_tag_id', 1).then(function(data){
        data.forEach(function(current){
            popular.push(current.product_id)
        })
        return knex('products').whereIn('id', popular)
    }).then(function(popularProducts){
        res.json(popularProducts)
    }).catch(function (err) {
        next(new Error(err));
      });
});

router.route('/:id').get(function(req, res, next){
    var productsId =  Number(req.params.id);
    knex('products').where('id', productsId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
  knex("products")
  .insert({
    upc: req.body.upc,
    plu: req.body.plu
  })
  .returning("*")
  .then(function (products) {
    res.json(products[0]);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

module.exports = router;
