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


module.exports = router;
