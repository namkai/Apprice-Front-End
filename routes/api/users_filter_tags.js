'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('users_filter_tags')
    .orderBy('id').then(function(users_filter_tags){
        res.json(users_filter_tags);
    }).catch(function(err){
        next(new Error(err));
    });
});


module.exports = router;
