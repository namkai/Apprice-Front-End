'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('products_filter_tags')
    .orderBy('id').then(function(products_filter_tags){
        res.json(products_filter_tags);
    }).catch(function(err){
        next(new Error(err));
    });
});


module.exports = router;
