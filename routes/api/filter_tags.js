'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('filter_tags')
    .orderBy('id').then(function(filter_tags){
        res.json(filter_tags);
    }).catch(function(err){
        next(new Error(err));
    });
});

// router.route('/:id').get(function(req, res, next){
//     knex('filter_tags').where('id', req.id)
//     .then(function(filter_tags){
//         res.json(filter_tags);
//     }).catch(function(err){
//         next(new Error(err));
//     });
// });


module.exports = router;
