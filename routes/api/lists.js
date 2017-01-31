'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('lists')
    .orderBy('id').then(function(lists){
        res.json(lists);
    }).catch(function(err){
        next(new Error(err));
    });
});


module.exports = router;
