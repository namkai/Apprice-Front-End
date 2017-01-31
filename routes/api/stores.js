'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('stores')
    .orderBy('id').then(function(stores){
        res.json(stores);
    }).catch(function(err){
        next(new Error(err));
    });
});


module.exports = router;
