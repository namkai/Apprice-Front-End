'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('lists_products')
    .orderBy('id').then(function(lists_products){
        res.json(lists_products);
    }).catch(function(err){
        next(new Error(err));
    });
});


module.exports = router;
