'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('users')
    .orderBy('id').then(function(users){
        res.json(users);
    }).catch(function(err){
        next(new Error(err));
    });
});


module.exports = router;