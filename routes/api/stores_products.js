'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('stores_products')
    .orderBy('id').then(function(stores_products){
        res.json(stores_products);
    }).catch(function(err){
        next(new Error(err));
    });
});


module.exports = router;
