'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('type_tags')
    .orderBy('id').then(function(type_tags){
        res.json(type_tags);
    }).catch(function(err){
        next(new Error(err));
    });
});


module.exports = router;
